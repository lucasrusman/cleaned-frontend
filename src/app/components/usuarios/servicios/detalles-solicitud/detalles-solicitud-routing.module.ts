import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesSolicitudPage } from './detalles-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesSolicitudPageRoutingModule {}
