import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }


  login(formDetails) {
    if(formDetails){
      this.authService.loginInUrAccnt(formDetails).then((userDetails)=> {
        if(userDetails) {
          //console.log('userDetails', userDetails);
          localStorage.setItem('userId',userDetails.uid );
          this.router.navigate(['/products']);
        }
        
      })
      .catch((error) => {
        // this.ngFlashMessageService.showFlashMessage({
        //   messages: [error.message], 
        //   dismissible: true, 
        //   timeout: false,
        //   type: 'danger'
        // });
      })
    }
    //formDetails.reset();
  }

  cancelForm(formDetails) {
    formDetails.reset();
  }
}
