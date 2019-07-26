import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() product;
  productCountArray = [];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    //  this.shoppingCartService.getProducts().subscribe((products) => {
    //   console.log(products);
    // });
  }

  addToCart(product) {
    this.productCountArray.push(product.id);
    this.shoppingCartService.createCart(product);
    this.shoppingCartService.sendProductCount('increament');
  }
}
