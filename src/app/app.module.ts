import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SnakbarService } from './service/snakbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    SnakbarService,
    CanDeactivateGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
