import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../../services/pubsub/pubsub";
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  state : any = {};
  constructor(private pubSubService: PubSubService, private localStorageService: LocalStorageService) {

  }

  ngOnInit() {
  }

  login(){
    const user = {user: this.state.user};
    this.pubSubService.publish("login",user);
    debugger;
    this.localStorageService.set("user", user);
    var x = this.localStorageService.get("user");
    this.state.user = "";
  }

}
