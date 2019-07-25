import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {ApplicantService} from '../applicant.service';
import {Applicant} from '../applicant';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  applicants: Observable<Applicant[]>;

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.applicants = this.applicantService.getApplicantsList();
  }

}
