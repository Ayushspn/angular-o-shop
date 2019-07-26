import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  filterderProducts: any[];
  productSubscription: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productSubscription = this.productService.getAllProducts().subscribe((products) => {
      this.filterderProducts = this.products = products;
    });
  }

  serachProduct(serachQuery) {
    console.log(this.filterderProducts);
    if (serachQuery) {
      this.filterderProducts = this.products.filter((product) => {
        return product.title.includes(serachQuery);
      });
    } else {
      this.filterderProducts = this.products;
    }
    console.log(this.filterderProducts);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
