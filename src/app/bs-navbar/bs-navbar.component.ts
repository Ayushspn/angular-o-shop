import { Component, OnInit } from '@angular/core';
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
export class BsNavbarComponent implements OnInit, DoCheck  {
  productCount$;
  productCount = 0;
  productCountArray = [];
  count = 0;
  constructor(public authService: AuthService, private shoppingCartService: ShoppingCartService) {
  }
  ngOnInit() {
    this.productCount$ =
      this.shoppingCartService.getProductCount().subscribe((count) => {
        if (count === 'increament') {
          let getCount = localStorage.getItem('productCount') | 0;
          this.productCount = +getCount++;
          localStorage.setItem('productCount', this.productCount);
          this.count = localStorage.getItem('productCount') | '0';
        }
      });
  }

  ngDoCheck() {
    const getCount = localStorage.getItem('productCount') | 0;
    this.count = +getCount |   0;
  }
  logOut() {
    this.authService.logOut();
  }

}
