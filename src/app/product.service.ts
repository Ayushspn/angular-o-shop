import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products').push(product);
  }

  getAllProducts() {
    return this.db.list(`/products`)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.val();
          const id = a.key;
          return { id, ...data };
        });
      });
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }
  updateProduct(productid, product) {
    return this.db.object('/products/' + productid).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
