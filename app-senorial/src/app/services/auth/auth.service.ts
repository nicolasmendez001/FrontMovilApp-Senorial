import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public authAF: AngularFireAuth, private route: Router) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.authAF.signInWithEmailAndPassword(email, password).then(
        user => {
          resolve(user);
        }).catch(err => rejected(err));
    });
  }

  logout() {
    this.authAF.signOut().then(() => {
      this.route.navigate(['/init']);
    })
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authAF.createUserWithEmailAndPassword(email, password).then(res => {
        resolve(res)
      }).catch(err => reject(err));
    });
  }

  resetPass(email: string) {
    return this.authAF.sendPasswordResetEmail(email);
  }

  verifyEmail() {
    this.authAF.user.subscribe(user => {
      user.sendEmailVerification();
    })
  }

  /*
  isVerifidied() {
    return new Promise((resolve) => {
      this.authAF.user.subscribe(user => {
        resolve(user.emailVerified);
      })
    })
  }
  */
}
