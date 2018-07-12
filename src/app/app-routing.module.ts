import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {CreateUserV1Component} from "./user/create-user-v1/create-user-v1.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

const routes: Routes = [
  { path: 'user/create', component: CreateUserV1Component },
  { path: 'user/changePassword', component: ChangePasswordComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
    exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
