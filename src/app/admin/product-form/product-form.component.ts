import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
//constructor(private productService: ProductService, ) { }
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  productId = '';
  task : any;
  uploadProgress : any;
  ImagePath : string;
  optionValue : number;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private afStorage : AngularFireStorage) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAllCategories();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe((product) => {
        this.product = product;
      });
    }
  }

  onProfitSelectionChange(value) {
    this.optionValue = value;
  }
  submitForm(product) {
    this.optionValue === 1 ? product.prodcutAvliablity = true : product.prodcutAvliablity = false;
    product.productImagePath = this.ImagePath;
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

  uploadProductImage(event) {
    const randomId = Math.random().toString(36).substring(2);
  const ref = this.afStorage.ref(randomId);
  const task = ref.put(event.target.files[0]);
  this.uploadProgress = task.snapshotChanges()
    .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
   const UploadImagePath = task.downloadURL();
   UploadImagePath.subscribe((path) => {
      this.ImagePath = path;
  })
  }

}
