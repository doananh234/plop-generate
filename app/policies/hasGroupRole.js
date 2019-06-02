'use strict';

const Boom = require('boom');
const _ = require('lodash');
const Models = require('../db/models');
const CONSTANT = require('../constants');

const hasGroupRole = function (serverRole, groupRole) {
  const isCommunityGroupAdmin = async (request, h) => {
    const { auth } = request;
    const userId = auth.credentials.id;
    console.log(userId);
    const userRole = auth.credentials.scope;
    const { communityGroupId, id } = request.params;
    const groupId = id || communityGroupId;
    if (_.isArray(serverRole) && _.includes(serverRole, userRole)) {
      return h.continue;
    }

    const checkUser = await Models.CommunityGroupMember.query()
      .where({
        communityGroupId: groupId,
        userId
      })
      .first();
    if (!_.isArray(groupRole) || !_.includes(groupRole, checkUser.memberRole)) {
      throw Boom.forbidden('Not alllow permission in group');
    }
    return h.continue;
  };
  isCommunityGroupAdmin.applyPoint = 'onPreHandler';
  return isCommunityGroupAdmin;
};

module.exports = hasGroupRole;
