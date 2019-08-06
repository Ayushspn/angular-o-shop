import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private activatedRoute: Router, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  // login() {
  //   const returnUrl = this.route.snapshot.paramMap.get('returnUrl') || '/';
  //   localStorage.setItem('returnUrl', returnUrl);
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithRedirect(provider);
  // }
  createUserInFirebase(userDeatails){
    return firebase.auth().createUserWithEmailAndPassword(userDeatails.email, userDeatails.password);
  }

  loginInUrAccnt(userDeatails) {
    return firebase.auth().signInWithEmailAndPassword(userDeatails.email, userDeatails.password)
  }

  logOut() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }
}
