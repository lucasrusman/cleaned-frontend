import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condiciones',
  templateUrl: './condiciones.page.html',
  styleUrls: ['./condiciones.page.scss'],
})
export class CondicionesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRegisterPage() {
    this.router.navigateByUrl('/registro/usuarios');
  };

}
