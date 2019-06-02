'use strict';

const Crypto = require('crypto');
const slug = require('slug');

const getDateString = function () {
  const now = new Date();
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  const month =
    now.getMonth() < 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
  return `${day}-${month}-${now.getFullYear()}`;
};

const getRandomString = function () {
  return Crypto.randomBytes(8).toString('hex');
};

const getFileName = function (fileName, prependDate) {
  const index = fileName.indexOf('.');
  const file = slug(fileName.substring(0, index));
  const extension = fileName.substring(index);
  const name = file + '-' + getRandomString() + extension;
  if (prependDate) {
    return getDateString() + '/' + name;
  }
  return name;
};

module.exports = getFileName;
