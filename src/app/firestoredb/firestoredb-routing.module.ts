import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirestoredbPage } from './firestoredb.page';

const routes: Routes = [
  {
    path: '',
    component: FirestoredbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirestoredbPageRoutingModule {}
