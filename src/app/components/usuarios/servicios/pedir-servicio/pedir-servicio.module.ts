import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedirServicioPageRoutingModule } from './pedir-servicio-routing.module';

import { PedirServicioPage } from './pedir-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedirServicioPageRoutingModule
  ],
  declarations: [PedirServicioPage]
})
export class PedirServicioPageModule {}
