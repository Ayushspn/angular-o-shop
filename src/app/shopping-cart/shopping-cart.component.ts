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
      this.products.forEach(product => {
        product.count = 0;
        this.products.forEach((Insideproduct) => {
          if (Insideproduct.id === product.id) {
            product.count = product.count + 1;
            const productTotalPrice = (+product.count) * (+product.price);
            //console.log(productTotalPrice);
            product.productTotalPrice = productTotalPrice;

          }
        });
        if (this.maintainidsarray.indexOf(product.id) === -1) {
          this.maintainArray.push(product);
          this.productFinalCount = this.productFinalCount + product.productTotalPrice;
          this.maintainidsarray.push(product.id);
          console.log(this.productFinalCount);
        }
        
      });
    });
    
  }

}
