import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../../services/pubsub/pubsub";

@Component({
  selector: 'app-obs2',
  templateUrl: './obs2.component.html',
  styleUrls: ['./obs2.component.scss']
})
export class Obs2Component implements OnInit {

  obsData : any = {};

  constructor(private pubSubService: PubSubService) {
    this.pubSubService.subscribe("obs2", (userData)=>{
      this.obsData = userData;
    });

  }

  send() {
    this.pubSubService.publish("obs1", "from obs2")
  }

  ngOnInit() {
  }

}
