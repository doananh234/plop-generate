'use strict';

const GROUP_ROLE = {
  ADMIN: 1,
  USER: 2
};

const USER_ROLE = {
  SUPER_ADMIN: 1,
  ADMIN: 2,
  USER: 3
};

const BLOOD_TYPE = ['A', 'B', 'AB', 'O', 'A-', 'B-', 'AB-', 'O-', 'unknown'];

const RH_BLOOD_TYPE = ['A-', 'AB-', 'B-', 'O-'];

const CASE_STATUS = ['OPEN', 'CANCELLED', 'IN-PROGRESS', 'RESOLVED'];

const UPDATE_CASE_STATUS = ['CANCELLED', 'RESOLVED'];

const GENDER = ['Male', 'Female'];

const LANGUAGE = ['en', 'vi'];

module.exports = {
  GROUP_ROLE,
  USER_ROLE,
  BLOOD_TYPE,
  RH_BLOOD_TYPE,
  CASE_STATUS,
  UPDATE_CASE_STATUS,
  GENDER,
  LANGUAGE
};
