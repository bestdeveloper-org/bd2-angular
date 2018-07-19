;
import { ProductComponent } from './product/product.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { ButtonComponent } from './counter/button/button.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateUserV1Component } from './user/create-user-v1/create-user-v1.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonComponent,
    CreateUserComponent,
    CreateUserV1Component,
    ChangePasswordComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
