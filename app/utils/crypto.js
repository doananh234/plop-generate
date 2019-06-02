'use strict';

const crypto = require('crypto');

const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || 'Q5Kb4qNpqREuu18VeMwhPkHYawmh13z2'; // Must be 256 bytes (32 characters)
const SALT = process.env.SALT || 'somethingrandom';
const IV_LENGTH = process.env.IV_LENGTH || 16;

const NONCE_LENGTH = process.env.NONCE_LENGTH || 10; // Gives us 8-character Base64 output. The higher this number, the better
const key = crypto.pbkdf2Sync(ENCRYPTION_KEY, SALT, 10000, 32, 'sha512');

function encrypt(text) {
  const nonce = crypto.randomBytes(NONCE_LENGTH);
  const iv = Buffer.alloc(IV_LENGTH);
  nonce.copy(iv);

  const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
  const encrypted = cipher.update(text.toString());
  const message = Buffer.concat([nonce, encrypted, cipher.final()]);
  return message.toString('base64');
}

function decrypt(text) {
  const message = Buffer.from(text, 'base64');
  const iv = Buffer.alloc(IV_LENGTH);
  message.copy(iv, 0, 0, NONCE_LENGTH);
  const encryptedText = message.slice(NONCE_LENGTH);
  const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
  let decrypted = decipher.update(encryptedText);
  try {
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (Err) {
    return 'NULL';
  }
}

module.exports = { decrypt, encrypt };
