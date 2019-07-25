import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmitloanComponent } from './submitloan/submitloan.component';
import { HomeComponent } from './home/home.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'submitloan', component: SubmitloanComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map