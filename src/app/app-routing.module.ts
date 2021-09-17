import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./module/dashboard/dashoard.module').then(m => m.DashoardModule),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
