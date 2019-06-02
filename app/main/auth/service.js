'use strict';

const Boom = require('boom');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const crypto = require('crypto');
const Models = require('../../db/models');
const jwt = require('../../services/jwt');
const PasswordUtils = require('../../services/password');
const MailUtils = require('../../emailService');
const { passportFaceBook } = require('./authSocial');

const mainWebUrl =
  process.env.WEB_URL || 'https://lucas-lucas-api-staging.lucas.com/';

class AuthService {
  async login(body) {
    try {
      const { email } = body;
      const user = await Models.User.query()
        .findOne({
          email
        })
        .joinRelation('role')
        .select([
          'users.*',
          'users.password as hashPassword',
          'role.name as scope'
        ]);
      if (!user) {
        throw Boom.notFound('This account is not exist');
      }
      const isCorrectPassword = await PasswordUtils.compare(
        body.password,
        user.hashPassword
      );
      if (!isCorrectPassword) {
        throw Boom.unauthorized('Incorrect email or password');
      }

      const data = _.pick(user, ['email', 'id', 'scope']);
      return await _.assign(
        {
          token: jwt.issue(data)
        },
        data
      );
    } catch (err) {
      throw err;
    }
  }

  async register(payload) {
    try {
      const { email } = payload;
      const checkUserByEmail = await Models.User.query().findOne({
        email
      });
      if (checkUserByEmail) {
        throw Boom.badRequest('Email is exist');
      }
      // Check use payload have password or random create a new one
      const hashPassword = await PasswordUtils.hash(payload.password);

      payload.password = hashPassword;
      const memberRole = await Models.Role.query().findOne({
        name: 'user'
      });
      payload.roleId = memberRole.id;

      let data = await Models.User.query()
        .insert(payload)
        .returning('*');
      data.scope = 'user';
      data = _.pick(data, ['email', 'id', 'scope']);
      return _.assign(
        {
          token: jwt.issue(data)
        },
        data
      );
    } catch (err) {
      throw err;
    }
  }

  async resetPassword(token, password) {
    const user = await Models.User.query()
      .where('resetPasswordToken', token)
      .where('resetPasswordExpire', '>', new Date().toISOString())
      .first();
    if (!user) {
      throw Boom.conflict('Your password token is incorrect ore expired');
    }
    const newHashPassword = await bcrypt.hash(password, 5);
    await Models.User.query().patchAndFetchById(user.id, {
      resetPasswordToken: null,
      resetPasswordExpire: null,
      password: newHashPassword
    });
    return {
      message: 'Your password has been reset'
    };
  }

  async forgotPassword(email) {
    const user = await Models.User.query()
      .findOne({
        email
      })
      .joinRelation('role')
      .select([
        'users.*',
        'users.password as hashPassword',
        'role.name as scope'
      ]);
    if (!user) {
      throw Boom.notFound('Email is not found');
    }
    // Generate random token.
    const resetPasswordToken = crypto.randomBytes(64).toString('hex');
    MailUtils.sendEmailResetPassword(
      user.email,
      `${mainWebUrl}reset-password?token=${resetPasswordToken}`
    );
    const resetPasswordExpire = new Date();
    resetPasswordExpire.setDate(resetPasswordExpire.getDate() + 1);
    await await Models.User.query().patchAndFetchById(user.id, {
      resetPasswordToken,
      resetPasswordExpire: resetPasswordExpire.toISOString() // Token will expire in 24 hours
    });
    return {
      message: 'Your reset password request has been confirmed'
    };
  }

  async loginFacebook(request) {
    try {
      const profile = await passportFaceBook(request);
      if (!profile.id) {
        return Boom.badRequest(
          'This access token is not registered by the application'
        );
      }
      const existUser = await Models.User.findOne({
        facebookId: profile.id
      });
      if (existUser) {
        existUser.scope = existUser.role.name;

        const data = _.pick(existUser, ['username', 'email', 'id', 'scope']);
        return await _.assign(
          {
            token: jwt.issue(data)
          },
          data
        );
      }

      const role = await Models.Role.findOne({ name: 'user' });
      const body = {
        name: profile.displayName,
        avatar: profile.photos[0].value,
        username: profile.id,
        email: profile.emails[0] && profile.emails[0].value,
        facebookId: profile.id,
        password: 'anhdoan@secret',
        role: role.id
      };
      return await this.register(body);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthService;
