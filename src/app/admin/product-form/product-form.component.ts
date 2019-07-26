import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  productId = '';
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAllCategories();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe((product) => {
        this.product = product;
        console.log(this.product);
      });
    }
  }
  submitForm(product) {
    if (this.productId) {
      this.productService.updateProduct(this.productId, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete(productId) {
    if (confirm('Are you sure if you want to delete thi product?')) {
      this.productService.deleteProduct(this.productId);
      this.router.navigate(['/admin/products']);
    }
  }

}
