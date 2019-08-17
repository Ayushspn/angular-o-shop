import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  saveProfileData(profileObject){
    const userId = localStorage.getItem('userId')
    return this.db.object('/users/' + userId).update(profileObject);
  }

  getLoggedInUser(){
    const userId = localStorage.getItem('userId');
    return this.db.object('/users/' + userId).valueChanges();
    
  }
}
