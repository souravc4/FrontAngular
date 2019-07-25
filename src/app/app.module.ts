import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { SubmitloanComponent } from './submitloan/submitloan.component';
import { HomeComponent } from './home/home.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitloanComponent,
    HomeComponent,
    ViewApplicationsComponent,
    ApplicantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    FlashMessagesModule,
    FlashMessagesModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule 
  ],
  providers: [MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
