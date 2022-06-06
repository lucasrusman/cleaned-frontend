import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.page.html',
  styleUrls: ['./profesionales.page.scss'],
})
export class ProfesionalesPage implements OnInit {
  date: any;
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor() { }

  ngOnInit() {
  }

  goToConfirmPage(){}

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }
}
