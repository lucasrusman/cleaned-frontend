import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';
import { CorePage } from '../core/core.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('../core/core.module').then(m => m.CorePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosPageRoutingModule {}
