import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ValidationService = class ValidationService {
    constructor() { }
    validateRegister(user) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // check if all fields are filled
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return "undefined-fields";
        }
        if (user.name[0] == ' ' || user.email[0] == ' ' || user.username[0] == ' ' || user.password[0] == ' ') {
            return "undefined-fields";
        }
        // check if email is valid
        else if (!re.test(String(user.email).toLowerCase())) {
            return "invalid-email";
        }
        // check if passwords and confirm password are same
        else if (user.password != user.cpassword) {
            return "invalid-password";
        }
        // else return true
        else {
            return "valid";
        }
    }
};
ValidationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ValidationService);
export { ValidationService };
//# sourceMappingURL=validation.service.js.map