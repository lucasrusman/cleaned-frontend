import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactarProfesionalPage } from './contactar-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: ContactarProfesionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactarProfesionalPageRoutingModule {}
