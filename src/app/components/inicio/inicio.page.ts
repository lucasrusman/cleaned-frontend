import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private readonly router: Router) { }

  ngOnInit() {
  }

  goToUserPage(){
    this.router.navigateByUrl('/registro/usuarios');
  }

  goToProfessionalPage(){
    this.router.navigateByUrl('/registro/profesionales');
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

}
