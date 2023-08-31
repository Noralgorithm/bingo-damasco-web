import { Component, inject } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  private authService = inject(AuthenticationService);

  public isUserLoggedIn = this.authService.isUserLoggedIn();

  public logout = () => {
    this.authService.logout();
    this.isUserLoggedIn = false;
  };
}
