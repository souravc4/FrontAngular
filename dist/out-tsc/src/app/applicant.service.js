import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApplicantService = class ApplicantService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api/applicants';
    }
    getApplicant(ID) {
        return this.http.get(`${this.baseUrl}/${ID}`);
    }
    createApplicant(applicant) {
        return this.http.post(`${this.baseUrl}` + `/create`, applicant);
    }
    getApplicantsList() {
        return this.http.get(`${this.baseUrl}`);
    }
};
ApplicantService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApplicantService);
export { ApplicantService };
//# sourceMappingURL=applicant.service.js.map