'use strict';


/**
 * Delete an existing employer.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns BaseEmployerResponse
 **/
exports.apiV1EmployerEmployer_uidDELETE = function(employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Retrieve all employees enrolled in workplace giving.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployerEmployeesGetResponse
 **/
exports.apiV1EmployerEmployer_uidEnrolledEmployeesGET = function(employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : 0,
  "employees" : [ {
    "employee_UniqueID" : "employee_UniqueID",
    "employee_Personal_Email" : "employee_Personal_Email",
    "payrollSchedule_UniqueID" : "payrollSchedule_UniqueID",
    "employee_WorkplaceGiving_EndDate" : "employee_WorkplaceGiving_EndDate",
    "employer_UniqueID" : "employer_UniqueID",
    "employee_AltruityID" : 0,
    "resultCode" : 5,
    "employer_AltruityID" : 6,
    "employee_Last_Name" : "employee_Last_Name",
    "resultMessage" : "resultMessage",
    "employee_Job_Title" : "employee_Job_Title",
    "employee_WorkplaceGiving_DeductionAmt" : "employee_WorkplaceGiving_DeductionAmt",
    "employee_Phone" : "employee_Phone",
    "employee_WorkplaceGiving_StartDate" : "employee_WorkplaceGiving_StartDate",
    "employee_First_Name" : "employee_First_Name",
    "employee_Work_Email" : "employee_Work_Email",
    "employee_WorkplaceGiving_IsEnrolled" : "employee_WorkplaceGiving_IsEnrolled",
    "payrollSchedule_AltruityID" : 1
  }, {
    "employee_UniqueID" : "employee_UniqueID",
    "employee_Personal_Email" : "employee_Personal_Email",
    "payrollSchedule_UniqueID" : "payrollSchedule_UniqueID",
    "employee_WorkplaceGiving_EndDate" : "employee_WorkplaceGiving_EndDate",
    "employer_UniqueID" : "employer_UniqueID",
    "employee_AltruityID" : 0,
    "resultCode" : 5,
    "employer_AltruityID" : 6,
    "employee_Last_Name" : "employee_Last_Name",
    "resultMessage" : "resultMessage",
    "employee_Job_Title" : "employee_Job_Title",
    "employee_WorkplaceGiving_DeductionAmt" : "employee_WorkplaceGiving_DeductionAmt",
    "employee_Phone" : "employee_Phone",
    "employee_WorkplaceGiving_StartDate" : "employee_WorkplaceGiving_StartDate",
    "employee_First_Name" : "employee_First_Name",
    "employee_Work_Email" : "employee_Work_Email",
    "employee_WorkplaceGiving_IsEnrolled" : "employee_WorkplaceGiving_IsEnrolled",
    "payrollSchedule_AltruityID" : 1
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
 * Retrieve an existing employer.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployerGetResponse
 **/
exports.apiV1EmployerEmployer_uidGET = function(employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mailing_PostalCode" : "mailing_PostalCode",
  "physical_Street1" : "physical_Street1",
  "physical_Street2" : "physical_Street2",
  "mailing_State" : "mailing_State",
  "employer_UniqueID" : "employer_UniqueID",
  "resultCode" : 6,
  "physical_PostalCode" : "physical_PostalCode",
  "employer_AltruityID" : 0,
  "physical_State" : "physical_State",
  "physical_Country" : "physical_Country",
  "ein" : "ein",
  "mailing_Country" : "mailing_Country",
  "resultMessage" : "resultMessage",
  "physical_City" : "physical_City",
  "mailing_City" : "mailing_City",
  "payroll_Admin" : "",
  "phone" : "phone",
  "employer_Name" : "employer_Name",
  "employer_Status" : "employer_Status",
  "mailing_Street1" : "mailing_Street1",
  "mailing_Street2" : "mailing_Street2"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve summary giving data for the employer.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployerGivingDataGetResponse
 **/
exports.apiV1EmployerEmployer_uidGivingDataGET = function(employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "activeDonors" : 0,
  "ytdGiving" : "ytdGiving",
  "lifetimeGiving" : "lifetimeGiving",
  "resultCode" : 6,
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
 * Update an existing employer. Partial data is allowed because incoming blank values will not replace existing values.
 *
 * body EmployerUpdateRequest See sample request. (optional)
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns BaseEmployerResponse
 **/
exports.apiV1EmployerEmployer_uidPUT = function(body,employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Creates a new administrator for an existing employer. Any existing administrator record will be end-dated.
 *
 * body PayrollAdminCreateRequest  (optional)
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollAdminCreateResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollAdminPOST = function(body,employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "payroll_Admin_AltruityID" : 0,
  "resultCode" : 6,
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
 * Delete an administrator record.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * payrollAdmin_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollAdminDeleteResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidDELETE = function(employer_uid,payrollAdmin_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Retrieve the active administrator for an employer.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * payrollAdmin_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollAdminGetResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidGET = function(employer_uid,payrollAdmin_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "payroll_Admin_AltruityID" : 0,
  "employer_Unique_ID" : "employer_Unique_ID",
  "payroll_Admin_UniqueID" : "payroll_Admin_UniqueID",
  "first_Name" : "first_Name",
  "unique_ID" : "unique_ID",
  "phone" : "phone",
  "employer_Altruity_ID" : 6,
  "resultCode" : 1,
  "last_Name" : "last_Name",
  "resultMessage" : "resultMessage",
  "job_Title" : "job_Title",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing administrator. Partial data is allowed because incoming blank values will not replace existing values.
 *
 * body PayrollAdminUpdateRequest See sample request. (optional)
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * payrollAdmin_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollAdminUpdateResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollAdminPayrollAdmin_uidPUT = function(body,employer_uid,payrollAdmin_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Creates a new payroll schedule for an existing employer.
 *
 * body PayrollScheduleCreateRequest  (optional)
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollScheduleCreateResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollSchedulePOST = function(body,employer_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : 6,
  "resultMessage" : "resultMessage",
  "payroll_Schedule_AltruityID" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a payroll schedule record.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * payrollSchedule_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollScheduleDeleteResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidDELETE = function(employer_uid,payrollSchedule_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Retrieve all active payroll schedules for an employer.
 *
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * payrollSchedule_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollScheduleGetResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidGET = function(employer_uid,payrollSchedule_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "payroll_Schedule_UniqueID" : "payroll_Schedule_UniqueID",
  "initial_Cycle_StartDate" : "initial_Cycle_StartDate",
  "payroll_Schedule_Name" : "payroll_Schedule_Name",
  "employer_Unique_ID" : "employer_Unique_ID",
  "employer_Altruity_ID" : 5,
  "altruity_Frequency" : "altruity_Frequency",
  "resultCode" : 5,
  "resultMessage" : "resultMessage",
  "payroll_Schedule_AltruityID" : 0,
  "biMonthlyPay_Day1" : 6,
  "biMonthlyPay_Day2" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing payroll schedule record. Partial data is allowed because incoming blank values will not replace existing values.
 *
 * body PayrollScheduleUpdateRequest  (optional)
 * employer_uid String Provide the unique ID from your system or the Altruity ID.
 * payrollSchedule_uid String Provide the unique ID from your system or the Altruity ID.
 * returns PayrollScheduleUpdateResponse
 **/
exports.apiV1EmployerEmployer_uidPayrollSchedulePayrollSchedule_uidPUT = function(body,employer_uid,payrollSchedule_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Creates a new employer for workplace giving.
 *
 * body EmployerCreateRequest  (optional)
 * returns EmployerCreateResponse
 **/
exports.apiV1EmployerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : 6,
  "employer_AltruityID" : 0,
  "resultMessage" : "resultMessage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

