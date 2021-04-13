import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',    
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'hal4',
    loadChildren: () => import('./hal4/hal4.module').then( m => m.Hal4PageModule)
  },
  {
    path: 'hal4/:url',
    loadChildren: () => import('./hal4/hal4.module').then( m => m.Hal4PageModule)
  },
  {
    path: 'tambahan',
    loadChildren: () => import('./tambahan/tambahan.module').then( m => m.TambahanPageModule)
  },
  {
    path: 'firestoredb',
    loadChildren: () => import('./firestoredb/firestoredb.module').then( m => m.FirestoredbPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
