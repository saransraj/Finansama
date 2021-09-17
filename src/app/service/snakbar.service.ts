import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  openSnackBar(message: string, action: string): any{
    this.snackBar.open(message, action,
      {
        duration: 2000,
        // here specify the position
        verticalPosition: 'top'
      }
      );
  }
}
