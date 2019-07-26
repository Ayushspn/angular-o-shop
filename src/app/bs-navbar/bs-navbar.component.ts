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
export class BsNavbarComponent implements OnInit {
  productCount$;
  productCount = 0;
  productCountArray = [];
  constructor(public authService: AuthService, private shoppingCartService: ShoppingCartService) {
  }
  ngOnInit() {
    this.productCount$ =
      this.shoppingCartService.getProductCount().subscribe((count) => {
        if (count === 'increament') {
          this.productCount++;
        }
      });
  }
  logOut() {
    this.authService.logOut();
  }

}
