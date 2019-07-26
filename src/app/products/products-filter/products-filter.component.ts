import { Component, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
  @Output() categoryEventEmitter = new EventEmitter();
  categories$;
  categories;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAllCategories().subscribe((catogries) => {
        this.categories = catogries;
    });
  }
  filterProducts(selectedCategory) {
    this.categoryEventEmitter.emit(selectedCategory);
  }
}
