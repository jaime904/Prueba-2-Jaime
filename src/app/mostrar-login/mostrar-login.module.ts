import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarLoginPageRoutingModule } from './mostrar-login-routing.module';

import { MostrarLoginPage } from './mostrar-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarLoginPageRoutingModule
  ],
  declarations: [MostrarLoginPage]
})
export class MostrarLoginPageModule {}
