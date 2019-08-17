import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, 
    private activatedRoute: Router, 
    private route: ActivatedRoute, 
    private db: AngularFireDatabase) {
    this.user$ = afAuth.authState;
  }

 forgetFirebasePassword(email) : Promise<any>{
  return firebase.auth().sendPasswordResetEmail(email);
 }
  createUserInFirebase(userDeatails){
    return firebase.auth().createUserWithEmailAndPassword(userDeatails.email, userDeatails.password);
  }

  loginInUrAccnt(userDeatails) {
    return firebase.auth().signInWithEmailAndPassword(userDeatails.email, userDeatails.password)
  }
  userLoggedIn() {
    return firebase.auth();
  }
  logOut() {
    return firebase.auth().signOut();
  }
  getLoggedInUser(){
    const userId = localStorage.getItme('userId');
    return this.db.list(`/users${userId}`)
    .snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.val();
        const id = a.key;
        return { id, ...data };
      });
    });
  }
}
