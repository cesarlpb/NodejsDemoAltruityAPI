'use strict';


/**
 * Submit search criteria to retrieve a list of matching charities. Submit requests to the other Charity Data methods for additional filter criteria.
 * APIs to search our Charity database.
 *
 * body CharitiesSearchRequest  (optional)
 * returns CharityDataSearchResponse
 **/
exports.apiV1CharityDataCharitySearchGET = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "searchResult" : { },
  "resultCode" : 0,
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
 * Returns a list of standardized mission categories that can be used for Charity Search filtering.
 *
 * returns CharityDataSearchResponse
 **/
exports.apiV1CharityDataMissionCategoriesForSearchGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "searchResult" : { },
  "resultCode" : 0,
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
 * Returns a list of spotlighted charities that have been pre-configured for the owner of the Altruity API Key.
 * Returns a list of spotlighted charities that have been pre-configured for the owner of the Altruity API Key.
 *
 * returns CharityDataSearchResponse
 **/
exports.apiV1CharityDataSpotlightedCharitiesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "searchResult" : { },
  "resultCode" : 0,
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
 * Returns a list of U.S. States that can be used for Charity Search filtering.
 *
 * returns CharityDataSearchResponse
 **/
exports.apiV1CharityDataStatesForSearchGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "searchResult" : { },
  "resultCode" : 0,
  "resultMessage" : "resultMessage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

