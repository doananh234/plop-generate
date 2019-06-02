'use strict';

const crypto = require('crypto');

function randomPassword(length) {
  return Math.random()
    .toString(36)
    .substring(length);
}

function randomToken() {
  return crypto.randomBytes(64).toString('hex');
}

module.exports = {
  randomPassword,
  randomToken
};
