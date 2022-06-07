/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string = 'Christian Russo';
  email: string = 'crusso@gmail.com';
  telefono: number = 1112341234;


  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  goToEditProfile(){
    this.router.navigateByUrl('/editar-perfil');
  }

}
