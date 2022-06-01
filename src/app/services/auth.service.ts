import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './../models/user.model';
import { map, tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { AuthResponseData } from '../interfaces/AuthResponseData';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user = new BehaviorSubject<User>(null);
  // private activeLogoutTimer: any;

  // constructor(private http: HttpClient) {}
  // getUserIsAuthenticated() {
  //   return this.user.asObservable().pipe(
  //     map(user => {
  //       if (user) {
  //         return !!user.getToken();
  //       } else {
  //         return false;
  //       }
  //     })
  //   );
  // }

  // getUserId() {
  //   return this.user.asObservable().pipe(
  //     map(user => {
  //       if (user) {
  //         return user.id;
  //       } else {
  //         return null;
  //       }
  //     })
  //   );
  // }
  // getToken() {
  //   return this.user.asObservable().pipe(
  //     map(user => {
  //       if (user) {
  //         return user.getToken();
  //       } else {
  //         return null;
  //       }
  //     })
  //   );
  // }
  // authLogin() {
  //   return from(
  //     Storage.get({
  //       key: 'authData'
  //     })
  //   ).pipe(
  //     map(storedData => {
  //       if (!storedData || !storedData.value) {
  //         return null;
  //       }
  //       const parsedData = JSON.parse(storedData.value) as {
  //         token: string;
  //         tokenExpirationDate: string;
  //         userId: string;
  //         email: string;
  //       };
  //       const expirationData = new Date(parsedData.tokenExpirationDate);
  //       if (expirationData <= new Date()) {
  //         return null;
  //       }
  //       const user = new User(
  //         parsedData.userId,
  //         parsedData.email,
  //         parsedData.token,
  //         expirationData
  //       );
  //       return user;
  //     }),
  //     tap(user => {
  //       if (user) {
  //         this.user.next(user);
  //         this.autoLogout(user.getTokenDuration());
  //       }
  //     }),
  //     map(user => !!user)
  //   );
  // }

  // signUp(email: string, password: string) {
  //   return this.http
  //     .post<AuthResponseData>(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKeyFirebase}`,
  //       { email, password, returnSecureToken: true }
  //     )
  //     .pipe(tap(this.setUserData.bind(this)));
  // }

  // login(email: string, password: string) {
  //   return this.http
  //     .post<AuthResponseData>(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKeyFirebase}`,
  //       { email, password, returnSecureToken: true }
  //     )
  //     .pipe(tap(this.setUserData.bind(this)));
  // }
  // logout() {
  //   if (this.activeLogoutTimer) {
  //     clearTimeout(this.activeLogoutTimer);
  //   }
  //   this.user.next(null);
  //   Storage.remove({
  //     key: 'authData'
  //   });
  // }
  // autoLogout(duration: number) {
  //   if (this.activeLogoutTimer) {
  //     clearTimeout(this.activeLogoutTimer);
  //   }
  //   this.activeLogoutTimer = setTimeout(() => {
  //     this.logout();
  //   }, duration);
  // }
  // ngOnDestroy() {
  //   if (this.activeLogoutTimer) {
  //     clearTimeout(this.activeLogoutTimer);
  //   }
  // }
  // private setUserData(userData: AuthResponseData) {
  //   const expirationDate = new Date(new Date().getTime() + +userData.expiresIn * 1000);
  //   const user = new User(userData.localId, userData.email, userData.idToken, expirationDate);
  //   this.user.next(user);
  //   this.autoLogout(user.getTokenDuration());
  //   this.storeAuthData(
  //     userData.localId,
  //     userData.idToken,
  //     expirationDate.toISOString(),
  //     userData.email
  //   );
  // }
  // private storeAuthData(userId: string, token: string, tokenExpirationDate: string, email: string) {
  //   if (!Storage) {
  //     return;
  //   }
  //   const data = JSON.stringify({
  //     userId,
  //     token,
  //     tokenExpirationDate,
  //     email
  //   });
  //   Storage.set({
  //     key: 'authData',
  //     value: data
  //   });
  // }
}
