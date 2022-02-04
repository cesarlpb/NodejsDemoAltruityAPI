'use strict';


/**
 *
 * privateKey String  (optional)
 * no response value expected for this operation
 **/
exports.apiV1WorkplaceGivingPartnerEncryptAPIPrivateKeyPOST = function(privateKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve a list of employers, which originated from your payroll system, with at least one enrolled employee.
 *
 * returns OriginationSiteEnrolledEmployersGetResponse
 **/
exports.apiV1WorkplaceGivingPartnerEnrolledEmployersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : 1,
  "enrolled_Employers" : [ {
    "ytdGiving" : "ytdGiving",
    "lifetimeGiving" : "lifetimeGiving",
    "donationCount" : 6,
    "employer_UniqueID" : "employer_UniqueID",
    "employer_Name" : "employer_Name",
    "employer_AltruityID" : "employer_AltruityID",
    "enrolledEmployeeCount" : 0
  }, {
    "ytdGiving" : "ytdGiving",
    "lifetimeGiving" : "lifetimeGiving",
    "donationCount" : 6,
    "employer_UniqueID" : "employer_UniqueID",
    "employer_Name" : "employer_Name",
    "employer_AltruityID" : "employer_AltruityID",
    "enrolledEmployeeCount" : 0
  } ],
  "resultMessage" : "resultMessage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve summarized data across all enrolled employers that originated from your payroll system.
 *
 * no response value expected for this operation
 **/
exports.apiV1WorkplaceGivingPartnerGivingDataGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

