'use strict';

var utils = require('../utils/writer.js');
var Employer = require('../service/EmployerService');

module.exports.apiV1EmployerEmployer_uidDELETE = function apiV1EmployerEmployer_uidDELETE (req, res, next, employer_uid) {
  Employer.apiV1EmployerEmployer_uidDELETE(employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidEnrolledEmployeesGET = function apiV1EmployerEmployer_uidEnrolledEmployeesGET (req, res, next, employer_uid) {
  Employer.apiV1EmployerEmployer_uidEnrolledEmployeesGET(employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidGET = function apiV1EmployerEmployer_uidGET (req, res, next, employer_uid) {
  Employer.apiV1EmployerEmployer_uidGET(employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidGivingDataGET = function apiV1EmployerEmployer_uidGivingDataGET (req, res, next, employer_uid) {
  Employer.apiV1EmployerEmployer_uidGivingDataGET(employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPUT = function apiV1EmployerEmployer_uidPUT (req, res, next, body, employer_uid) {
  Employer.apiV1EmployerEmployer_uidPUT(body, employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollAdminPOST = function apiV1EmployerEmployer_uidPayrollAdminPOST (req, res, next, body, employer_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollAdminPOST(body, employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidDELETE = function apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidDELETE (req, res, next, employer_uid, payrollAdmin_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidDELETE(employer_uid, payrollAdmin_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidGET = function apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidGET (req, res, next, employer_uid, payrollAdmin_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidGET(employer_uid, payrollAdmin_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidPUT = function apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidPUT (req, res, next, body, employer_uid, payrollAdmin_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidPUT(body, employer_uid, payrollAdmin_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollSchedulePOST = function apiV1EmployerEmployer_uidPayrollSchedulePOST (req, res, next, body, employer_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollSchedulePOST(body, employer_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidDELETE = function apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidDELETE (req, res, next, employer_uid, payrollSchedule_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidDELETE(employer_uid, payrollSchedule_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidGET = function apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidGET (req, res, next, employer_uid, payrollSchedule_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidGET(employer_uid, payrollSchedule_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidPUT = function apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidPUT (req, res, next, body, employer_uid, payrollSchedule_uid) {
  Employer.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidPUT(body, employer_uid, payrollSchedule_uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1EmployerPOST = function apiV1EmployerPOST (req, res, next, body) {
  Employer.apiV1EmployerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
