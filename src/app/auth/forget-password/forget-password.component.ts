import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, 
    private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
  }
  submitForgetForm(email : string){
    this.authService.forgetFirebasePassword(email)
    .then((message) => {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Please check you email"], 
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
        type: 'error'
      });
    })
  }
}
