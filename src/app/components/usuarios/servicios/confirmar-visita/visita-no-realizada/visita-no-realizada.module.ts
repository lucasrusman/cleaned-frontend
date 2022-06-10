import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitaNoRealizadaPageRoutingModule } from './visita-no-realizada-routing.module';

import { VisitaNoRealizadaPage } from './visita-no-realizada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitaNoRealizadaPageRoutingModule
  ],
  declarations: [VisitaNoRealizadaPage]
})
export class VisitaNoRealizadaPageModule {}
