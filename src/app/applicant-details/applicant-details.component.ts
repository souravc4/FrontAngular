import { Component, OnInit, Input } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { ViewApplicationsComponent } from '../view-applications/view-applications.component';
import { Applicant } from '../applicant';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {

  @Input() applicant: Applicant;
 
  constructor(private applicantService: ApplicantService, private listComponent: ViewApplicationsComponent) { }

  ngOnInit() {
  }

}
