import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products$;
  products;
  maintainArray = [];
  maintainidsarray = [];
  productFinalCount = 0;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products$ = this.shoppingCartService.getProdcucts().subscribe((products) => {
      this.products = products;
        this.products.forEach((product) => {
          const productPrice = +product.price * +product.count;
          console.log(typeof productPrice);
          this.productFinalCount = this.productFinalCount + productPrice;
        })
    });
    
  }

}
