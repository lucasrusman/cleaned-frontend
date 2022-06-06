import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioBienvenidoPage } from './usuario-bienvenido.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioBienvenidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioBienvenidoPageRoutingModule {}
