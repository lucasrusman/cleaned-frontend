import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluacionVisitaPage } from './evaluacion-visita.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluacionVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluacionVisitaPageRoutingModule {}
