import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../services/pubsub/pubsub";
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login : any = "";
  constructor(private pubSubService: PubSubService, private localStorageService: LocalStorageService,
              private router: Router) {

    this.pubSubService.subscribe("login", (userData)=>{
      this.login = userData;
    });

  }

  ngOnInit() {
    this.login = this.localStorageService.get("user");
    if(!this.login){
      this.router.navigate(['/user/login']);
    }

  }

  logout()
  {

    this.localStorageService.set("user", null);
    this.pubSubService.publish("login", null);
    this.router.navigate(['/']);
  }
}
