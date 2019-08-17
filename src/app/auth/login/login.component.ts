import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {ProfileService} from '../../service/profile.service';
@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  leggedInUserList : any;
  constructor(
    private authService : AuthService,
    private router : Router,
    private profileService : ProfileService
  ) { }

  ngOnInit() {
    
  }


  login(formDetails) {
    debugger
    let navigationFlag = false;
    if(formDetails){
      this.authService.loginInUrAccnt(formDetails).then((userDetails)=> {
        if(userDetails) {
          localStorage.setItem('userId',userDetails.uid );
          this.profileService.getLoggedInUser().subscribe((loggedInUser) => {
            this.leggedInUserList = loggedInUser;
            !this.leggedInUserList.firstName ? navigationFlag =  false : navigationFlag = true;
            navigationFlag ? this.router.navigate(['/products']) : this.router.navigate(['/profile'])
          })
          
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
