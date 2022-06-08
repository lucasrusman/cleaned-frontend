import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarVisitaPage } from './confirmar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarVisitaPageRoutingModule {}
