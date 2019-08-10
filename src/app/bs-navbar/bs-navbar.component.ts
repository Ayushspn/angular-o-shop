import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  productCount$;
  productCount = 0;
  productCountArray = [];
  loggedInUser = false;
  count = 0;
  constructor(public authService: AuthService, 
    private shoppingCartService: ShoppingCartService, 
    private router : Router) {
  }
  ngOnInit() {
    this.authService.userLoggedIn().onAuthStateChanged((user) => {
      user ? this.loggedInUser = true : this.loggedInUser = false;
      console.log(this.loggedInUser);
    })
    this.productCount$ =
      this.shoppingCartService.getProductCount().subscribe((produtObject) => {
        let productCounts = 0;
        produtObject.forEach((prductObjectElement : {count ?: number}) => {
          if(prductObjectElement && prductObjectElement.count) {
            //console.log('element',element);
            productCounts = productCounts + prductObjectElement.count;
          }
          
        });
        this.productCount = productCounts; 
      });
      
  }

  logOutFromFireBase() {
    debugger
    this.authService.logOut().then((loggedOut) => {
      if(!loggedOut){
        localStorage.removeItem('userId');
        this.router.navigate(['/']);
      }
    })
  }

  oShopRedirect() : void {
    const loggedInUser = localStorage.getItem('userId');
    loggedInUser ? this.router.navigate(['/products']) : this.router.navigate(['/']);
  }

}
