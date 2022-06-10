import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarVisitaPage } from './confirmar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarVisitaPage
  },
  {
    path: 'evaluacion-visita',
    loadChildren: () =>
      import('./evaluacion-visita/evaluacion-visita.module').then(m => m.EvaluacionVisitaPageModule)
  },
  {
    path: 'visita-no-realizada',
    loadChildren: () =>
      import('./visita-no-realizada/visita-no-realizada.module').then(
        m => m.VisitaNoRealizadaPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmarVisitaPageRoutingModule {}
