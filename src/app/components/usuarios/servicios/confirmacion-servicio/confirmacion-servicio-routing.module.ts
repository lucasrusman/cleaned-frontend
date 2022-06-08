import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionServicioPage } from './confirmacion-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionServicioPageRoutingModule {}
