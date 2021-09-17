import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainer from './container';
import * as fromComponent from './component';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as fromServices from './service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    ...fromContainer.container,
    ...fromComponent.component,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  exports: [
    MatInputModule,
  ],
  providers: [
    ...fromServices.Service,
  ]
})
export class AuthModule { }
