import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesSolicitudPageRoutingModule } from './detalles-solicitud-routing.module';

import { DetallesSolicitudPage } from './detalles-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesSolicitudPageRoutingModule
  ],
  declarations: [DetallesSolicitudPage]
})
export class DetallesSolicitudPageModule {}
