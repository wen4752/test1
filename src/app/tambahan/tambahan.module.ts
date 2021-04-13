import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahanPageRoutingModule } from './tambahan-routing.module';

import { TambahanPage } from './tambahan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahanPageRoutingModule
  ],
  declarations: [TambahanPage]
})
export class TambahanPageModule {}
