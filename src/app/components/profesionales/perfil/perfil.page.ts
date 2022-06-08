import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre = 'Christian Russo';
  fechaNacimiento = '1234';
  email = 'crusso@gmail.com';
  direccion = 'Jose Hernandez 1283';
  telefono = 1112341234;
  valorHora = 100;

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }


  goToEditProfile(){
    this.router.navigateByUrl('profesionales/editar-perfil');
  }
}
