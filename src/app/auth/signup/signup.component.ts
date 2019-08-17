import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {AuthService} from '../../auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passwordMatch = false;
  constructor(
    private authService : AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router : Router
  ) {
   }


    
       

  ngOnInit() {
  }
  submitForm(formDetails) {
    if(formDetails){
      if(formDetails.confirmPassword !== formDetails.password){
        this.passwordMatch = true;
        return 
      }
      this.passwordMatch = false;
      this.authService.createUserInFirebase(formDetails).then((userDetails)=> {
        if(userDetails) {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["User Signed in successfully"], 
            dismissible: true, 
            timeout: true,
            type: 'success'
          });
          
        }
      
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
    this.router.navigate(['/']);
  }

  cancelForm(formDetails) {
    formDetails.reset();
  }
}
