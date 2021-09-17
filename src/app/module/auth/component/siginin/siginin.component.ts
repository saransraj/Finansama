import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnakbarService } from 'src/app/service/snakbar.service';
import { localStorageUtil } from 'src/app/utils/localstorage.util';

@Component({
  selector: 'app-siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.scss']
})
export class SigininComponent implements OnInit {
  sigiinForm: FormGroup;
  emailvalidation = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: SnakbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sigiinForm = this.formValidation();
  }

  formValidation(): FormGroup {
    return this.formBuilder.group({
        emailId: ['', Validators.pattern(this.emailvalidation)],
        password: ['', [Validators.required]],
    });
  }

  submitSiginin(): any {
    if (!!this.sigiinForm && this.sigiinForm.valid) {
      if (this.sigiinForm.controls.emailId.status === 'INVALID') {
        this.snackBar.openSnackBar('invalid email', 'ok');
      } else if (this.sigiinForm.value.password === '') {
        this.snackBar.openSnackBar('Enter the password', 'ok');
      } else {
        const activerole = localStorageUtil.getLocalStorage('activeRoleFinance');
        const data = !!activerole ? JSON.parse(activerole) : '';
        if (!data) {
          this.snackBar.openSnackBar('Invalid username or password', 'ok');
        } else {
          if (data.emailId !== this.sigiinForm.value.emailId && data.password === this.sigiinForm.value.password) {
            this.snackBar.openSnackBar('Entered email id and password is incorrect', 'ok');
          } else if (data.emailId !== this.sigiinForm.value.emailId ){
            this.snackBar.openSnackBar('Entered email id is incorrect', 'ok');
          } else if (data.password !== this.sigiinForm.value.password){
            this.snackBar.openSnackBar('Entered password is incorrect', 'ok');
          } else if (data.emailId === this.sigiinForm.value.emailId && data.password === this.sigiinForm.value.password) {
            this.snackBar.openSnackBar('Welcome to finansama', 'ok');
            this.router.navigate(['/dashboard']);
          }
        }
        console.log(data);
      }
    } else {
      this.snackBar.openSnackBar('Please fill the mandatory fields', 'ok');
    }
  }
}
