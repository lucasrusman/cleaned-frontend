import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionServicioPageRoutingModule } from './confirmacion-servicio-routing.module';

import { ConfirmacionServicioPage } from './confirmacion-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionServicioPageRoutingModule
  ],
  declarations: [ConfirmacionServicioPage]
})
export class ConfirmacionServicioPageModule {}
