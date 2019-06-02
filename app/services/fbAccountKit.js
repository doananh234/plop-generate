'use strict';

const crypto = require('crypto');
const rp = require('request-promise-native');

class FBAccountKitUtil {
  constructor() {
    this.fbAccountKitSecret =
      process.env.FB_ACCOUNTKIT_SECRECT_TOKEN ||
      '1eb558f364be7dda213de53087f9de8f';
    this.fbAppId = process.env.FACEBOOK_APP_ID || '1084983898234527';
  }

  checkFbCountKitId(appId) {
    return this.fbAppId === appId;
  }

  createFbAccountKitCheckUrl(token, proof) {
    return `https://graph.accountkit.com/v1.3/me/?access_token=${token}&appsecret_proof=${proof}`;
  }

  async checkServerSecretAccount(token) {
    const appsecretProof = crypto
      .createHmac('sha256', this.fbAccountKitSecret)
      .update(token)
      .digest('hex');
    const options = {
      uri: this.createFbAccountKitCheckUrl(token, appsecretProof),
      json: true
    };
    const res = await rp(options);
    return res;
  }
}

module.exports = new FBAccountKitUtil();
