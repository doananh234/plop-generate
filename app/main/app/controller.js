'use strict';

// const redis = require('../../redis');
const service = require('./service');

exports.getAppConfig = async (request) => {
  try {
    // const cacheData = await redis.stringGet('appConfig');
    // if (cacheData) {
    //   return cacheData;
    // }
    const configData = await service.getAppConfig();
    configData.publicLinkS3 = process.env.PUBLIC_LINK_S3;
    configData.summary.dynamicLink = 'https://app.lucas.com';
    // await redis.stringSet('appConfig', configData);
    return configData;
  } catch (err) {
    throw err;
  }
};

exports.deleteCache = async (request) => {
  try {
    // return await redis.delete(request.params.key);
  } catch (err) {
    throw err;
  }
};
