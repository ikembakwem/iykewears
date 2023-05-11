import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // TODO - authentication code
      this.router.navigateByUrl('/admin/main');
    } else {
      this.errorMessage = 'Form data is not valid';
    }
  }
}
