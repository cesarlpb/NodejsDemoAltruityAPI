'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.apiV1EmployeeEmployee_uidDELETE = function apiV1EmployeeEmployee_uidDELETE (req, res, next, employee_uid) {
  Employee.apiV1EmployeeEmployee_uidDELETE(employee_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployeeEmployee_uidDonationBasketDonationBasket_AltruityIDDELETE = function apiV1EmployeeEmployee_uidDonationBasketDonationBasket_AltruityIDDELETE (req, res, next, employee_uid, donationBasket_AltruityID) {
  Employee.apiV1EmployeeEmployee_uidDonationBasketDonationBasket_AltruityIDDELETE(employee_uid, donationBasket_AltruityID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployeeEmployee_uidDonationBasketGET = function apiV1EmployeeEmployee_uidDonationBasketGET (req, res, next, employee_uid) {
  Employee.apiV1EmployeeEmployee_uidDonationBasketGET(employee_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployeeEmployee_uidDonationBasketPOST = function apiV1EmployeeEmployee_uidDonationBasketPOST (req, res, next, body, employee_uid) {
  Employee.apiV1EmployeeEmployee_uidDonationBasketPOST(body, employee_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployeeEmployee_uidGET = function apiV1EmployeeEmployee_uidGET (req, res, next, employee_uid) {
  Employee.apiV1EmployeeEmployee_uidGET(employee_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployeeEmployee_uidPUT = function apiV1EmployeeEmployee_uidPUT (req, res, next, body, employee_uid) {
  Employee.apiV1EmployeeEmployee_uidPUT(body, employee_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployeePOST = function apiV1EmployeePOST (req, res, next, body) {
  Employee.apiV1EmployeePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
