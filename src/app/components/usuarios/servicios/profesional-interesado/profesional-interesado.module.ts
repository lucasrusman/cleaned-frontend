import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesionalInteresadoPageRoutingModule } from './profesional-interesado-routing.module';

import { ProfesionalInteresadoPage } from './profesional-interesado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesionalInteresadoPageRoutingModule
  ],
  declarations: [ProfesionalInteresadoPage]
})
export class ProfesionalInteresadoPageModule {}
