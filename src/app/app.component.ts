import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnDestroy {
  private authSub: Subscription;
  private previousAuthState = false;
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  // ngOnInit() {
  //   this.authSub = this.authService.getUserIsAuthenticated().subscribe(isAuth => {
  //     if (!isAuth && this.previousAuthState !== isAuth) {
  //       this.router.navigateByUrl('/auth');
  //     }
  //     this.previousAuthState = isAuth;
  //   });
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    });
  }

  // onLogout() {
  //   this.authService.logout();
  //   this.router.navigateByUrl('/auth');
  // }
  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
