import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordMatch = false;
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
  }
  submitForm(formDetails) {
    console.log(formDetails);
    if(formDetails.confirmPassword !== formDetails.password){
      this.passwordMatch = true;
      return 
    }
    this.passwordMatch = false;
    this.authService.createUserInFireBase(formDetails);
  }

  cancelForm(formDetails) {
    formDetails.reset();
  }
}
