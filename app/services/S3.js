'use strict';
const S3 = require('aws-sdk/clients/s3');

class S3Adapter {
  constructor() {
    this.accessKeyId = process.env.AWS_ACCESS_KEY_ID || 'AKIAJ4EFA2LXH7EJ6CIQ';
    this.bucketPrefix = process.env.AWS_BUCKET_PREFIX || '';
    this.secretAccessKey =
      process.env.AWS_SECRET_ACCESS_KEY ||
      '1XY+mO3cHaSp4zCxKETaaH5IaOTAF+MDwqq4WLaU';
    this.bucket = process.env.S3_BUCKET || 'lucas-dev';

    this.s3 = new S3({
      accessKeyId: this.accessKeyId,
      secretAccessKey: this.secretAccessKey,
      params: { Bucket: this.bucket },
    });
    this.baseUrl = process.env.PUBLIC_LINK_S3;
  }
  async uploadFile(request) {
    request.Bucket = this.bucket;
    request.Key = this.bucketPrefix + request.Key;
    const res = await this.s3.upload(request).promise();
    res.Location = this.getFileLocation(request.Key);
    return res;
  }

  async deleleFile(key) {
    return await this.s3
      .deleteObject({
        Bucket: this.bucket,
        Key: key,
      })
      .promise();
  }

  getFileLocation(key) {
    if (this.baseUrl) {
      return `${this.baseUrl}/${key}`;
    } else if (this.bucket) {
      return `https://s3-ap-southeast-1.amazonaws.com/${this.bucket}/${key}`;
    }
  }

  convertLinkToKey(link) {
    return link.replace(
      `https://${this.bucket}.s3.amazonaws.com/${this.bucketPrefix}`,
      ''
    );
  }

  getSignedUrl(key, type) {
    const s3Params = {
      Bucket: this.bucket,
      Key: key,
      ACL: 'public-read',
      ContentType: type,
    };

    // Ask S3 for a temporary URL that the client can use.
    return this.s3.getSignedUrl('putObject', s3Params);
  }
}

module.exports = new S3Adapter();
