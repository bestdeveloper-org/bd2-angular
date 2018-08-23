import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../services/pubsub/pubsub";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login : any = "";
  constructor(private pubSubService: PubSubService) {

    this.pubSubService.subscribe("login", (userData)=>{
      this.login = userData;
    });

  }

  ngOnInit() {
  }

}
