import {HttpService} from "./services/http.service";
;
import { ProductComponent } from './product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { ButtonComponent } from './counter/button/button.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateUserV1Component } from './user/create-user-v1/create-user-v1.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PubSubService} from "./services/pubsub/pubsub";
import { Obs1Component } from './observer/obs1/obs1.component';
import { Obs2Component } from './observer/obs2/obs2.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonComponent,
    CreateUserComponent,
    CreateUserV1Component,
    ChangePasswordComponent,
    ProductComponent,
    Obs1Component,
    Obs2Component,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, PubSubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
