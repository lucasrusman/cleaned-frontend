import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioBienvenidoPageRoutingModule } from './usuario-bienvenido-routing.module';

import { UsuarioBienvenidoPage } from './usuario-bienvenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioBienvenidoPageRoutingModule
  ],
  declarations: [UsuarioBienvenidoPage]
})
export class UsuarioBienvenidoPageModule {}
