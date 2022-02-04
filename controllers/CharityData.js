'use strict';

var utils = require('../utils/writer.js');
var CharityData = require('../service/CharityDataService');

module.exports.apiV1CharityDataCharitySearchGET = function apiV1CharityDataCharitySearchGET (req, res, next, body) {
  CharityData.apiV1CharityDataCharitySearchGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1CharityDataMissionCategoriesForSearchGET = function apiV1CharityDataMissionCategoriesForSearchGET (req, res, next) {
  CharityData.apiV1CharityDataMissionCategoriesForSearchGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1CharityDataSpotlightedCharitiesGET = function apiV1CharityDataSpotlightedCharitiesGET (req, res, next) {
  CharityData.apiV1CharityDataSpotlightedCharitiesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1CharityDataStatesForSearchGET = function apiV1CharityDataStatesForSearchGET (req, res, next) {
  CharityData.apiV1CharityDataStatesForSearchGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
