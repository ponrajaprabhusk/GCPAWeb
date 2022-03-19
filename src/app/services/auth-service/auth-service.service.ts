import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from 'src/app/Interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user!: User;

  constructor(public afauth: AngularFireAuth) { }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afauth.signInWithPopup(provider);
    this.user = credential.user as User;
    return this.createUserData(this.user);
  }

  createUserData(user: User) {
    
  }
}
