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
    this.authService.user$.switchMap((userLoggedIn) => {
      this.userDetails = userLoggedIn;
      const userId = localStorage.getItem('userId');
      if(product.count == 0 || ! product.count){
        return this.db.list('/shopping-cart/' + userLoggedIn.uid + '/' + product.id).remove();
      }
      else{
        return this.db.list('/shopping-cart/' + userLoggedIn.uid).set(product.id, product) ;
      }
        
      

    })
      .subscribe((done) => {
        console.log('done', done);
      });
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
    return this.authService.user$.switchMap((userLoggedIn) => {
      this.userDetails = userLoggedIn;
      return this.db.list('/shopping-cart/' + this.userDetails.uid).valueChanges();

    });
  }

  removeProduct(product) {
    console.log(product);
    this.authService.user$.switchMap((userLoggedIn) => {
      this.userDetails = userLoggedIn;
      return this.db.list('/shopping-cart/' + userLoggedIn.uid).remove(product.id);

    })
      .subscribe((done) => {
        console.log('done', done);
      });

  }


}
