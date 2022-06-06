import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/interfaces/AuthResponseData';
//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  isLoading = false;
  isLogin = true;
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    //private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }
  authenticate(email: string, password: string) {
    this.isLoading = true;
    this.loadingCtrl.create({ keyboardClose: true, message: 'Logging in...' }).then(loadingEl => {
      loadingEl.present();
      let authObs: Observable<AuthResponseData>;
      if (this.isLogin) {
        // authObs = this.authService.login(email, password);
      } else {
        //authObs = this.authService.signUp(email, password);
      }
      authObs.subscribe(
        resData => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        },
        errRes => {
          loadingEl.dismiss();
          const code = errRes.error.error.message;
          let message = 'Could not sign you up, please try again';
          if (code === 'EMAIL_EXISTS') {
            message = 'This email address exists already';
          } else if (code === 'EMAIL_NOT_FOUND') {
            message = 'E-Mail address could not be found';
          } else if (code === 'INVALID_PASSWORD') {
            message = 'This password is not correct.';
          }
          this.showAlert(message);
        }
      );
    });
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authenticate(email, password);
    form.reset();
  }

  goToRegisterPage() { };

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication Failed',
        message,
        buttons: ['Okay']
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

}
