import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
})
export class SignUpPageComponent {
  private authenticationService = inject(AuthenticationService);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nickname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatedPassword: new FormControl('', [Validators.required]),
  });

  public signUp = () => {
    if (!this.signupForm.valid) return this.toastr.error('Revisa tus datos.');

    const { name, nickname, email, password } = this.signupForm.value;

    return this.authenticationService
      .signUp(name!, nickname!, email!, password!)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success(
            'Cuenta creada exitosamente, ahora inicia sesión!'
          );
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          this.toastr.error(error?.message?.message);
        },
      });
  };
}
