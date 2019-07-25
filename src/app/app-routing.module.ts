import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitloanComponent } from './submitloan/submitloan.component';
import { HomeComponent } from './home/home.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'submitloan',component: SubmitloanComponent},
  {path:'applications',component: ViewApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
