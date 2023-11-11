import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarLoginPage } from './mostrar-login.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarLoginPageRoutingModule {}
