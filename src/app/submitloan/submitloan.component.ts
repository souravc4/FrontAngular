import { Component, OnInit } from '@angular/core';

import { Applicant } from '../applicant';
import { ApplicantService } from '../applicant.service';
import { ValidationService } from '../validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-submitloan',
  templateUrl: './submitloan.component.html',
  styleUrls: ['./submitloan.component.css']
})
export class SubmitloanComponent implements OnInit {

  applicant: Applicant = new Applicant();
  submitted = false;

  constructor(
    private applicantService: ApplicantService,
    private validateService: ValidationService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  newApplicant(): void {
    this.submitted = false;
    this.applicant = new Applicant();
  }

  save() {
    this.applicantService.createApplicant(this.applicant)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {

    var vres = this.validateService.validateForm(this.applicant);
    //console.log(vres);
    console.log(this.applicant.dOB);
    if (vres === "undefined-fields") {
      this.flashMessage.show('Please fill in all the fields', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "invalid-email") {
      this.flashMessage.show('Please give a valid email address', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "invalidPCode") {
      this.flashMessage.show('Invalid Postal Code, must have 5 digits', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "invalidHNumber") {
      this.flashMessage.show('Invalid Home Number, must have 10 digits', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "invalidMNumber") {
      this.flashMessage.show('Invalid Mobile Number, must have 10 digits', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "invalidEPCode") {
      this.flashMessage.show('Invalid Employee Postal Code, must have 5 digits', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "invalidAge") {
      this.flashMessage.show('The bank does not give loan in your age category', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "lessExp") {
      this.flashMessage.show('You are not eligible for loan as your work experience is less than 6 months', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    if (vres === "lessSalary") {
      this.flashMessage.show('Invalid Employee Postal Code, must have 5 digits', { cssClass: 'alert-success', timeout: 3000 });
      document.documentElement.scrollTop = 0;
    }

    else {
      this.submitted = true;
      this.save();
      this.flashMessage.show('Form submitted successfuly', { cssClass: 'alert-success', timeout: 3000});
      return false; 
    }

  }

}
