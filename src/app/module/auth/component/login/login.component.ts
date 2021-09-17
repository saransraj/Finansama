import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { localStorageUtil } from 'src/app/utils/localstorage.util';
import { SnakbarService } from 'src/app/service/snakbar.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/module/auth/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailvalidation = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: SnakbarService,
    private router: Router,
    private loginservice: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formValidation();
  }

  formValidation(): FormGroup {
    return this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        emailId: ['', Validators.pattern(this.emailvalidation)],
        password: ['', [Validators.required]],
        conformPassword: ['', [Validators.required]]
    });
  }

  submit(): any {
    console.log(this.loginForm);
    if (!!this.loginForm  && this.loginForm.valid) {
      if (this.loginForm.controls.emailId.status === 'INVALID') {
        this.snackBar.openSnackBar('invalid email', 'ok');
      } else if (this.loginForm.value.password !== this.loginForm.value.conformPassword ){
        this.snackBar.openSnackBar('password not match', 'ok');
      } else {
        const activeRole = JSON.stringify(this.loginForm.value);
        localStorageUtil.setLocalStorage('activeRoleFinance', activeRole);
        this.snackBar.openSnackBar('Sigin in sucessfully ', 'ok');
        this.loginservice.login(activeRole);
        this.router.navigate(['/auth/sigiin']);
      }
    } else {
      this.snackBar.openSnackBar('Please fill the mandatory fields', 'ok');
    }
  }

  login(): any {
    this.router.navigate(['/auth/sigiin']);
  }
}
