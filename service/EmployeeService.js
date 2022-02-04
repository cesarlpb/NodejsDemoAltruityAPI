'use strict';


/**
 * Delete an existing employee.
 *
 * employee_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployeeDeleteResponse
 **/
exports.apiV1EmployeeEmployee_uidDELETE = function(employee_uid) {
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
 * Delete the current employee Donation Basket.
 *
 * employee_uid String Provide the unique ID from your system or the Altruity ID.
 * donationBasket_AltruityID String Provide the unique ID from your system or the Altruity ID.
 * returns EmployeeDonationBasketDeleteResponse
 **/
exports.apiV1EmployeeEmployee_uidDonationBasketDonationBasket_AltruityIDDELETE = function(employee_uid,donationBasket_AltruityID) {
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
 * Retrieves the current Donation Basket for the employee.
 *
 * employee_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployeeDonationBasketGetResponse
 **/
exports.apiV1EmployeeEmployee_uidDonationBasketGET = function(employee_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "employee_UniqueID" : "employee_UniqueID",
  "employee_DonationBasket_EffDate" : "employee_DonationBasket_EffDate",
  "employee_DonationBasket_TotalAmount" : "employee_DonationBasket_TotalAmount",
  "employee_DonationBasket_EndDate" : "employee_DonationBasket_EndDate",
  "donationBasket_AltruityID" : 0,
  "employee_AltruityID" : 6,
  "resultCode" : 5,
  "donationBasket" : [ {
    "altruityCharityID" : 1,
    "charityName" : "charityName",
    "donationAmount" : "donationAmount"
  }, {
    "altruityCharityID" : 1,
    "charityName" : "charityName",
    "donationAmount" : "donationAmount"
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
 * An employee Donation Basket is a combination of 1 to 5 charity ID and donation amount pairings. The minimum donation amount per charity is $5.
 *
 * body EmployeeDonationBasketCreateRequest See sample below. (optional)
 * employee_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployeeDonationBasketCreateResponse
 **/
exports.apiV1EmployeeEmployee_uidDonationBasketPOST = function(body,employee_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "donationBasket_AltruityID" : 0,
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
 * Retrieve an existing employee.
 *
 * employee_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployeeGetResponse
 **/
exports.apiV1EmployeeEmployee_uidGET = function(employee_uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing employee. Partial data is allowed because incoming blank values will not replace existing values.
 *
 * body EmployeeUpdateRequest See sample request. (optional)
 * employee_uid String Provide the unique ID from your system or the Altruity ID.
 * returns EmployeeUpdateResponse
 **/
exports.apiV1EmployeeEmployee_uidPUT = function(body,employee_uid) {
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
 * Creates a new employee for workplace giving.
 *
 * body EmployeeCreateRequest  (optional)
 * returns EmployeeCreateResponse
 **/
exports.apiV1EmployeePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "employee_AltruityID" : 0,
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

