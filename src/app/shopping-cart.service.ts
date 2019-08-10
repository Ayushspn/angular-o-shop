import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private productCountSubject = new Subject<string>();
  constructor(private db: AngularFireDatabase, private authService: AuthService) { }
  userDetails;
  


  createCart(product) {
      const userId = (localStorage.getItem('userId'));
      if(product.count == 0 || ! product.count){
        return this.db.list('/shopping-cart/' + userId + '/' + product.id).remove();
      }
      else{
        return this.db.list('/shopping-cart/' + userId).set(product.id, product) ;
      }
      
  }


  getProductCount() {
    //return this.productCountSubject.asObservable();
    return this.authService.user$.switchMap((userLoggedIn) => {
      this.userDetails = userLoggedIn;
      return this.db.list('/shopping-cart/' + this.userDetails.uid).valueChanges();

    });
  }
  sendProductCount(productCount: string) {
    this.productCountSubject.next(productCount);
  }

  getProdcucts() {
    const userId = (localStorage.getItem('userId'));
      return this.db.list('/shopping-cart/' + userId).valueChanges();
  }

  removeProduct(product) {
    const userId = (localStorage.getItem('userId'));
      return this.db.list('/shopping-cart/' + userId).remove(product.id);
  }


}
