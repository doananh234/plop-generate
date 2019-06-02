'use strict';
const stream = require('stream');
const request = require('request');
const rp = require('request-promise-native');
const crypto = require('crypto');
const xmlbuilder = require('xmlbuilder');
const S3Adapter = require('./S3');

async function generateVoiceUrl(text, questionId, language) {
  if (language === 'vi') {
    return await getLinkS3VoiceVn(text, questionId);
  }
  if (language === 'en') {
    return await getLinkS3VoiceEn(text, questionId);
  }
}

function getAccessToken(subscriptionKey) {
  const options = {
    method: 'POST',
    uri:
      'https://southeastasia.api.cognitive.microsoft.com/sts/v1.0/issuetoken',
    headers: {
      'Ocp-Apim-Subscription-Key': subscriptionKey
    }
  };
  return rp(options);
}

function textToSpeech(accessToken, text) {
  // Create the SSML request.
  const xml_body = xmlbuilder
    .create('speak')
    .att('version', '1.0')
    .att('xml:lang', 'en-us')
    .ele('voice')
    .att('xml:lang', 'en-us')
    .att(
      'name',
      'Microsoft Server Speech Text to Speech Voice (en-US, Guy24KRUS)'
    )
    .txt(text)
    .end();
  // Convert the XML into a string to send in the TTS request.
  const body = xml_body.toString();

  const options = {
    method: 'POST',
    baseUrl: 'https://southeastasia.tts.speech.microsoft.com/',
    url: 'cognitiveservices/v1',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'cache-control': 'no-cache',
      'User-Agent': 'YOUR_RESOURCE_NAME',
      'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
      'Content-Type': 'application/ssml+xml'
    },
    body
  };
  return options;
}

async function getLinkS3VoiceEn(text, questionId) {
  const passthrough = new stream.PassThrough();
  const subscriptionKey =
    process.env.AZUZE_VOICE_SECRET_KEY || '9e7a6603c2af47f28ed2b42af75f5e1d';
  const accessToken = await getAccessToken(subscriptionKey);
  request(textToSpeech(accessToken, text))
    .on('response', (response) => {})
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(passthrough);
  try {
    const result = await S3Adapter.uploadFile({
      Body: passthrough,
      Key: `voices/${questionId}/en.mp3`
    });
    return result.Location;
  } catch (err) {
    console.log(err);
  }
}

async function getLinkS3VoiceVn(text, questionId) {
  const linkRequest = await rp({
    uri: 'http://api.openfpt.vn/text2speech/v4',
    headers: {
      api_key:
        process.env.FPT_VOICE_SECRET_KEY || 'ad5900af00cc4af083f074887a8593f4',
      speed: 0,
      voice: 'ngoclam',
      prosody: 1,
      'Cache-Control': 'no-cahe'
    },
    body: text,
    method: 'POST'
  });
  const requestResult = JSON.parse(linkRequest);
  //Delay time to upload file to s3. FPT api need time return real data from link
  setTimeout(() => uploadViToS3(requestResult.async, questionId), 10000);
  return S3Adapter.getFileLocation(`voices/${questionId}/vi.mp3`);
  // request(requestResult.async)
  //   .on('response', (response) => {})
  //   .on('error', (err) => {
  //     console.log(err);
  //   })
  //   .pipe(passthrough);
  // try {
  //   const result = await S3Adapter.uploadFile({
  //     Body: passthrough,
  //     Key: `voices/${questionId}/vi.mp3`
  //   });
  //   return result.Location;
  // } catch (err) {
  //   console.log(err);
  // }
}

async function uploadViToS3(fileUrl, questionId) {
  const passthrough = new stream.PassThrough();
  request(fileUrl)
    .on('response', (response) => {})
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(passthrough);
  try {
    const result = await S3Adapter.uploadFile({
      Body: passthrough,
      Key: `voices/${questionId}/vi.mp3`
    });
    return result.Location;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  generateVoiceUrl
};
