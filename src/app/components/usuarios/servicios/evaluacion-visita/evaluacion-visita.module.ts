import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionVisitaPageRoutingModule } from './evaluacion-visita-routing.module';

import { EvaluacionVisitaPage } from './evaluacion-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluacionVisitaPageRoutingModule
  ],
  declarations: [EvaluacionVisitaPage]
})
export class EvaluacionVisitaPageModule {}
