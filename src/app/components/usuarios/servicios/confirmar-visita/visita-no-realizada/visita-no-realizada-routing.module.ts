import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitaNoRealizadaPage } from './visita-no-realizada.page';

const routes: Routes = [
  {
    path: '',
    component: VisitaNoRealizadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitaNoRealizadaPageRoutingModule {}
