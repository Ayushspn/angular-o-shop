import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() product;
 // @Output() product ;
  productCountArray = [];
  savedProducts = [];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getProdcucts().subscribe((data) => {
      this.savedProducts = data;
    })
  }

  addToCart(product) {
    product.disabled = true;
    !product.count ? product.count =1 : product.count ++;
    product = product;
    this.productCountArray.push(product.id);
    this.shoppingCartService.createCart(product);
    this.shoppingCartService.sendProductCount('increament');
  }

  removeFromCart(product){
    const newCount = 0;
    this.savedProducts.forEach((savedProduct) => {
      if(savedProduct.id === product.id && product.count > 0){
        product.disabled = false;
        product.count = +product.count -1 ;
      }
      else{
        product.showError = true
      }
    })
    this.shoppingCartService.createCart(product);
  }
}
