import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() data: number;

  constructor() { }

  executa() {
    this.data.onClick();
  }

  ngOnInit() {

  }

}
