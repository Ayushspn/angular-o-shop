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
      return this.db.list('/shopping-cart/' + userLoggedIn.uid).push(product);

    })
      .subscribe((done) => {
        console.log('done', done);
      });
  }
  getProductCount(): Observable<any> {
    return this.productCountSubject.asObservable();
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


}
