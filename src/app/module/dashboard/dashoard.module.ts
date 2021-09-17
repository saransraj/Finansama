import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainer from './container';
import * as fromComponent from './component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    ...fromContainer.container,
    ...fromComponent.component,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    RouterModule,
    ...fromContainer.container,
    ...fromComponent.component,
],
})
export class DashoardModule { }
