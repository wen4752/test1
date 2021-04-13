import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahanPage } from './tambahan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahanPageRoutingModule {}
