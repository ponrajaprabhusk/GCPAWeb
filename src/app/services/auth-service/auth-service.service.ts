import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from 'src/app/Interfaces/UserInterface';
import { AngularFireFunctions } from '@angular/fire/compat/functions';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user!: User;
  userReady:boolean=false;

  constructor(public afauth: AngularFireAuth,public functions: AngularFireFunctions) { }
  
  createUserData(user: User) {
    const callable = this.functions.httpsCallable('users/createNewUser');
        console.log("create new user from ui");
        callable({ uid: user.uid, photoURL: user.photoURL, displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, providerId: user.providerId, numberOfRegistrations:0 }).subscribe({
          next: (data) => {
            console.log("Successful ");
          },
          error: (error) => {
            console.error("Error", error);
          },
        complete: () => console.info('Successful ')
    });
  }



  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afauth.signInWithPopup(provider);
    this.user = credential.user as User;
    this.userReady=true;
    return this.createUserData(this.user);
  }

  // async createUser(email: string, password: string, username: string) {
  //   await this.afauth.createUserWithEmailAndPassword(email, password);
  //   const user = firebase.auth().currentUser;
  //   user.updateProfile({
  //     displayName: username
  //   }).then(() => {
  //     this.createUserData(user);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  setCurrentUser(user:User){
    this.user=user;
    this.userReady=true;
  }

}
