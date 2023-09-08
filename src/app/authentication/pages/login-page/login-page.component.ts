import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inject } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private authService = inject(AuthenticationService);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  private email = new FormControl('', Validators.email);
  private password = new FormControl('', Validators.required);

  public loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  public login = () => {
    if (!this.loginForm.valid) return this.toastr.error('Revisa tus datos');

    return this.authService
      .login(this.email.value!, this.password.value!)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.authService.storeUserData(response.data);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.toastr.error(error?.error?.message || 'unknown error');
        },
      });
  };
}
