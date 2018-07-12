import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  hero: any = {};
  @ViewChild('heroForm') currentForm: NgForm;

  onChangePassword() {
    debugger;
    let isFormValid = true;

    this.currentForm.controls['password'].markAsDirty();
    isFormValid =  this.currentForm.controls['password'].valid;
  }

  ngOnInit() {
  }

}
