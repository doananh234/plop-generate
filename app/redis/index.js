'use strict';

const Redis = require('ioredis');
require('dotenv').config();

const REDIS_URL = process.env.REDIS_URL;

class RedisService {
  constructor() {
    this.prefix = 'lucas';
    this.options = { enableOfflineQueue: false };
    this.redisInstance = REDIS_URL
      ? new Redis(REDIS_URL, this.options)
      : new Redis(this.options);
    this.redisInstance.on('error', () => console.log('Redis connect error'));
  }

  async stringGet(key) {
    try {
      const str = await this.redisInstance.get(`${this.prefix}:${key}`);
      return JSON.parse(str);
    } catch (err) {
      return null;
    }
  }

  async delete(key) {
    return await this.redisInstance.del(`${this.prefix}:${key}`);
  }

  async stringSet(key, data, ttl) {
    const str = JSON.stringify(data);
    try {
      if (!ttl) {
        return await this.redisInstance.set(`${this.prefix}:${key}`, str);
      }
      return await this.redisInstance.set(
        `${this.prefix}:${key}`,
        str,
        'EX',
        ttl
      );
    } catch (err) {}
  }
}

module.exports = new RedisService();
