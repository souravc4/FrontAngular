import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateForm(applicant): string {
    // age validation logic 
    var a = applicant.dOB;
    var year = Number(a.substr(11, 4));
    var month = a.substr(4, 3);
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    var mon = (monthNames.indexOf(month));
    var day = Number(a.substr(8, 2));

    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < mon || (today.getMonth() == mon && today.getDate() < day)) {
      age--;
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (applicant.fullName === undefined || applicant.lastName == undefined || applicant.dOB == undefined || applicant.maritalStatus == undefined || applicant.sSN == undefined || applicant.loanAmount == undefined || applicant.loanPurpose == undefined || applicant.addressLine1 == undefined || applicant.city == undefined || applicant.stateName == undefined || applicant.postalCode == undefined || applicant.homePhone == undefined || applicant.mnumber == undefined || applicant.email == undefined || applicant.employerName == undefined || applicant.annualSalary == undefined || applicant.workExperienceYear == undefined || applicant.workExperienceMonth == undefined || applicant.employerAddressLine1 == undefined || applicant.employerCity == undefined || applicant.employerStateName == undefined || applicant.employerPostalCode == undefined) {
      return "undefined-fields";
    }
    else if (!re.test(String(applicant.email).toLowerCase())) {
      return "invalid-email"
    }
    else if (applicant.postalCode.toString().length < 5) {
      return "invalidPCode";
    }
    else if (applicant.homePhone.toString().length < 10) {
      return "invalidHNumber";
    }
    else if (applicant.mnumber.toString().length < 10) {
      return "invalidMNumber";
    }
    else if (applicant.employerPostalCode.toString().length < 5) {
      return "invalidEPCode";
    }
    else if (age<18 || age>65) {
      return "invalidAge";
    }
    else if (applicant.workExperienceMonth < 6 && applicant.workExperienceYear == 0) {
      return "lessExp";
    }
    else if (applicant.annualSalary < 10000) {
      return "lessSalary";
    }

  }
}
