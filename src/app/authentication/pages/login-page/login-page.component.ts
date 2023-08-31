import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  public email = new FormControl('', Validators.email);
  public password = new FormControl('', Validators.required);

  public login = () => {
    this.authService.login(this.email.value!, this.password.value!).subscribe(
      (response: any) => {
        this.authService.storeUserToken(response?.data?.token);
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.toastr.error(error?.error?.message || 'unknown error');
      }
    );
  };
}
