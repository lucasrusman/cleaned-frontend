import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedirServicioPage } from './pedir-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: PedirServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedirServicioPageRoutingModule {}
