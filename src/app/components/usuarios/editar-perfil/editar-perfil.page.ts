import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  nombre = 'Christian Russo';
  email = 'crusso@gmail.com';
  telefono = 1112341234;


  constructor() { }

  ngOnInit() {
  }

}
