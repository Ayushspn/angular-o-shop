import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {AuthService} from '../../auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordMatch = false;
  constructor(
    private authService : AuthService,
    private ngFlashMessageService: NgFlashMessageService
  ) {
   }


    
       

  ngOnInit() {
  }
  submitForm(formDetails) {
    console.log(formDetails);
    if(formDetails.confirmPassword !== formDetails.password){
      this.passwordMatch = true;
      return 
    }
    this.passwordMatch = false;
    this.authService.createUserInFirebase(formDetails).then((userDetails)=> {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["User Signed in successfully"], 
        dismissible: true, 
        timeout: false,
        type: 'success'
      });
    })
    .catch((error) => {
      this.ngFlashMessageService.showFlashMessage({
        messages: [error.message], 
        dismissible: true, 
        timeout: false,
        type: 'danger'
      });
    })
  }

  cancelForm(formDetails) {
    formDetails.reset();
  }
}
