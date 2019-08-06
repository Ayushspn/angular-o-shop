import { Injectable } from '@angular/core';
//import { AngularFireAuth } from 'angular/auth';
import * as firebase from 'firebase';

//import { auth } from  'firebase/app';
import { AngularFireAuth } from  "angular/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  createUserInFireBase(userDetails) {
      this.afAuth.auth.createUserWithEmailAndPassword(userDetails.email, userDetails.password).then((data) => {
        console.log('data',data);
      })
  }
}
