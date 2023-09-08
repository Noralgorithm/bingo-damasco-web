import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  private authenticationService = inject(AuthenticationService);
  private router = inject(Router);

  public playNavigation = () => {
    const isUserLoggedIn = this.authenticationService.isUserLoggedIn();
    if (isUserLoggedIn) return this.router.navigateByUrl('/rooms');
    else return this.router.navigateByUrl('/login');
  };
}
