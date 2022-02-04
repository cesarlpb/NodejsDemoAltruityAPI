'use strict';

var utils = require('../utils/writer.js');
var WorkplaceGivingPartner = require('../service/WorkplaceGivingPartnerService');

module.exports.apiV1WorkplaceGivingPartnerEncryptAPIPrivateKeyPOST = function apiV1WorkplaceGivingPartnerEncryptAPIPrivateKeyPOST (req, res, next, privateKey) {
  WorkplaceGivingPartner.apiV1WorkplaceGivingPartnerEncryptAPIPrivateKeyPOST(privateKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1WorkplaceGivingPartnerEnrolledEmployersGET = function apiV1WorkplaceGivingPartnerEnrolledEmployersGET (req, res, next) {
  WorkplaceGivingPartner.apiV1WorkplaceGivingPartnerEnrolledEmployersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1WorkplaceGivingPartnerGivingDataGET = function apiV1WorkplaceGivingPartnerGivingDataGET (req, res, next) {
  WorkplaceGivingPartner.apiV1WorkplaceGivingPartnerGivingDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
