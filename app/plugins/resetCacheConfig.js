'use strict';

const { getAppConfig } = require('../main/app/service');
const RedisService = require('../redis');

async function resetCacheConfig(request, h) {
  const response = request.response;
  // not change app config cache when error
  if (response.isBoom) {
    return h.continue;
  }
  const configData = await getAppConfig();
  RedisService.stringSet('appConfig', configData);
  return h.continue;
}

module.exports = resetCacheConfig;
