import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: DashboardContainerComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
