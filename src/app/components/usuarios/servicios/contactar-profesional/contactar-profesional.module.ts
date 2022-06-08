import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactarProfesionalPageRoutingModule } from './contactar-profesional-routing.module';

import { ContactarProfesionalPage } from './contactar-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactarProfesionalPageRoutingModule
  ],
  declarations: [ContactarProfesionalPage]
})
export class ContactarProfesionalPageModule {}
