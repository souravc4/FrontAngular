import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Applicant } from '../applicant';
let SubmitloanComponent = class SubmitloanComponent {
    constructor(applicantService, validateService) {
        this.applicantService = applicantService;
        this.validateService = validateService;
        this.applicant = new Applicant();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newApplicant() {
        this.submitted = false;
        this.applicant = new Applicant();
    }
    save() {
        this.applicantService.createApplicant(this.applicant)
            .subscribe(data => console.log(data), error => console.log(error));
    }
    onSubmit() {
        const user = {
            fullName: this.fullName,
            middleName: this.middleName,
            lastName: this.lastName,
            dOB: this.dOB,
            MaritalStatus: this.MaritalStatus,
            sSN: this.sSN,
            loanAmount: this.loanAmount,
            loanPurpose: this.loanPurpose,
            descriptions: this.descriptions,
            addressLine1: this.addressLine1,
            addressLine2: this,
            city: string,
            stateName: string,
            postalCode: number,
            homePhone: number,
            office: number,
            mnumber: number,
            email: string,
            employerName: string,
            annualSalary: number,
            workExperienceYear: number,
            workExperienceMonth: number,
            designition: number,
            employeeAddressLine1: string,
            employeeAddressLine2: string,
            employerCity: string,
            employerState: string,
            employerPostalCode: string,
            loanStatus: string
        };
        this.submitted = true;
        this.save();
    }
};
SubmitloanComponent = tslib_1.__decorate([
    Component({
        selector: 'app-submitloan',
        templateUrl: './submitloan.component.html',
        styleUrls: ['./submitloan.component.css']
    })
], SubmitloanComponent);
export { SubmitloanComponent };
//# sourceMappingURL=submitloan.component.js.map