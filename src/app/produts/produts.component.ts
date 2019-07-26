import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit, OnDestroy {
  products$: Subscription;
  products = [];
  filteredProducts = [];
  category = '';

  constructor(private productService: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getAllProducts().subscribe(products => {
      this.products = this.filteredProducts = products;
    });
  }

  filterProducts(category) {
    category ? this.filteredProducts = this.products.filter((product) => {
        return product.category.includes(category.id);
    }) : this.filteredProducts = this.products;
    console.log(this.filterProducts);
  }
  ngOnDestroy() {
    this.products$.unsubscribe();
  }
}
