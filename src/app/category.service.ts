import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAllCategories() {
    return this.db.list('/categories').snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.val();
        const id = a.key;
        return { id, ...data };
      });
    });
  }
}
