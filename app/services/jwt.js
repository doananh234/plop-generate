'use strict';

const jsonwebtoken = require('jsonwebtoken');
const _ = require('lodash');

class Jwt {
  constructor() {
    this.secret = process.env.JWT_SECRET || 'lucas123';
    this.ttl = 7 * 24 * 60 * 60 * 1000; //Token will expire in 7 days
  }

  issue(payload, jwtOptions = {}) {
    return jsonwebtoken.sign(
      _.assign(payload, {
        ttl: this.ttl,
      }),
      this.secret
    );
  }
}

module.exports = new Jwt();
