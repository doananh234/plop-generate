'use strict';

const Models = require('../../db/models');

exports.getAppConfig = async (query) => {
  const result = await Promise.all([
    Models.TypeGroup.query(),
    Models.SubTypeGroup.query(),
    Models.CaseType.query(),
    Models.CaseStatus.query(),
    Models.AppSummary.query().first(),
    Models.ConfigFamilyGroup.query().select('relationships')
  ]);
  return {
    typeGroup: result[0],
    subTypeGroup: result[1],
    caseType: result[2],
    caseStatus: result[3],
    summary: result[4],
    configFamilyGroup: result[5]
  };
};
