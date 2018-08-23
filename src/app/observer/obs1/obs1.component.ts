import { Component, OnInit } from '@angular/core';
import {PubSubService} from "../../services/pubsub/pubsub";

@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.scss']
})
export class Obs1Component implements OnInit {

  obsData : any = {};

  constructor(private pubSubService: PubSubService) {

    this.pubSubService.subscribe("obs1", (userData)=>{
      this.obsData = userData;
    });

  }

  send() {
    this.pubSubService.publish("obs2", "from obs1")
  }

  ngOnInit() {
  }

}
