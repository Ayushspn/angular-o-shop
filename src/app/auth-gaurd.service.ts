import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { observable, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route , state: RouterStateSnapshot) {
   return this.authService.user$.map((user) => {
      if (user) {
        console.log('autheticated');
        return true;
      }
      this.router.navigate(['/login'], {queryParams : {returnUrl : state.url}});
      console.log(' not autheticated');
      return false;
    });
  }
}
