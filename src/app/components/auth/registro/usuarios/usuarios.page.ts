import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

}
