import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private baseUrl = 'http://localhost:8080/api/applicants';

  constructor(private http: HttpClient) { }

  getApplicant(ID: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${ID}`);
  }

  createApplicant(applicant: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, applicant);
  }
  
  getApplicantsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  
}
