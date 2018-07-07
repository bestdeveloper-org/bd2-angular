import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { ButtonComponent } from './counter/button/button.component';
import { CreateUserComponent } from './user/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
