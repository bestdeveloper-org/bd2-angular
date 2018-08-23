import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {CreateUserV1Component} from "./user/create-user-v1/create-user-v1.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ProductComponent} from "./product/product.component";
import {LoginComponent} from "./user/login/login.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full' },
  { path: 'user/create', component: CreateUserV1Component },
  { path: 'user/changePassword', component: ChangePasswordComponent },
  { path: 'user/product', component: ProductComponent,canActivate: [AuthGuard], },
  { path: 'user/login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }

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
