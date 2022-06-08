import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarVisitaPageRoutingModule } from './confirmar-visita-routing.module';

import { ConfirmarVisitaPage } from './confirmar-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarVisitaPageRoutingModule
  ],
  declarations: [ConfirmarVisitaPage]
})
export class ConfirmarVisitaPageModule {}
