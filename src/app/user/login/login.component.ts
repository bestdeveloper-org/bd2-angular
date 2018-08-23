import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../../services/pubsub/pubsub";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  state : any = {};
  constructor(private pubSubService: PubSubService) {

  }

  ngOnInit() {
  }

  login(){
    this.pubSubService.publish("login",{user: this.state.user});
    this.state.user = "";
  }

}
