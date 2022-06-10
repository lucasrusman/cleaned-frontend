import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
  },
  {
    path: 'direccion',
    loadChildren: () => import('./direccion/direccion.module').then( m => m.DireccionPageModule)
  },
  {
    path: 'pedir-servicio',
    loadChildren: () => import('./pedir-servicio/pedir-servicio.module').then( m => m.PedirServicioPageModule)
  },
  {
    path: 'descripcion-servicio',
    loadChildren: () => import('./descripcion-servicio/descripcion-servicio.module').then( m => m.DescripcionServicioPageModule)
  },
  {
    path: 'detalles-solicitud',
    loadChildren: () => import('./detalles-solicitud/detalles-solicitud.module').then( m => m.DetallesSolicitudPageModule)
  },
  {
    path: 'confirmacion-servicio',
    loadChildren: () => import('./confirmacion-servicio/confirmacion-servicio.module').then( m => m.ConfirmacionServicioPageModule)
  },
  {
    path: 'profesional-interesado',
    loadChildren: () => import('./profesional-interesado/profesional-interesado.module').then( m => m.ProfesionalInteresadoPageModule)
  },
  {
    path: 'contactar-profesional',
    loadChildren: () => import('./contactar-profesional/contactar-profesional.module').then( m => m.ContactarProfesionalPageModule)
  },
  {
    path: 'estado-solicitud',
    loadChildren: () => import('./estado-solicitud/estado-solicitud.module').then( m => m.EstadoSolicitudPageModule)
  },
  {
    path: 'confirmar-visita',
    loadChildren: () => import('./confirmar-visita/confirmar-visita.module').then( m => m.ConfirmarVisitaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPageRoutingModule {}
