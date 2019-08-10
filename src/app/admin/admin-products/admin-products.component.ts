import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';

import { AngularFireStorage } from 'angularfire2/storage';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  filterderProducts: any[] = [];
  productSubscription: Subscription;
  constructor(private productService: ProductService, private afStoarge : AngularFireStorage) { }

  ngOnInit() {
    this.productSubscription = this.productService.getAllProducts().subscribe((products) => {
      this.filterderProducts = this.products = products;
    });
  }

  serachProduct(serachQuery) {
    if (serachQuery) {
      this.filterderProducts = this.products.filter((product) => {
        return product.title.includes(serachQuery);
      });
    } else {
      this.filterderProducts = this.products;
    }
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
