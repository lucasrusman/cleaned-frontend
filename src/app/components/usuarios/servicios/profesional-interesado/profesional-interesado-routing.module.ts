import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalInteresadoPage } from './profesional-interesado.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalInteresadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesionalInteresadoPageRoutingModule {}
