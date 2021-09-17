import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainer from './container';



const routes: Routes = [
  {
    path : 'login',
    component: fromContainer.LoginContainerComponent
  },
  {
    path: 'sigiin',
    component: fromContainer.SigiinContainerComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
