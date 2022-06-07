import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  nombre = 'Christian Russo';
  fechaNacimiento = '1234';
  email = 'crusso@gmail.com';
  direccion = 'Jose Hernandez 1283';
  telefono = 1112341234;
  valorHora = 100;

  constructor() { }

  ngOnInit() {
  }

}
