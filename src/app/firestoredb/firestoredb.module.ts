import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirestoredbPageRoutingModule } from './firestoredb-routing.module';

import { FirestoredbPage } from './firestoredb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirestoredbPageRoutingModule
  ],
  declarations: [FirestoredbPage]
})
export class FirestoredbPageModule {}
