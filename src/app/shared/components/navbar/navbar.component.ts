import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private router = inject(Router);
  private authService = inject(AuthenticationService);

  private readonly WHITE = '#EFE9F4';
  private readonly DARK_GREEN = '#082022';

  public pathname: string = '';
  public showAuthLinks: boolean = true;
  public titleColor: string = this.DARK_GREEN;
  public isUserLoggedIn = this.authService.isUserLoggedIn();

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      this.updatePathname(event.url);
      this.isUserLoggedIn = this.authService.isUserLoggedIn();
    });
  }

  private updatePathname = (newPathname: string) => {
    this.pathname = newPathname;

    this.showAuthLinks =
      this.pathname !== '/login' && this.pathname !== '/signup';

    this.updateTitleColor();
  };

  private updateTitleColor = () => {
    if (this.pathname === '/login' || this.pathname === '/signup') {
      this.titleColor = this.DARK_GREEN;
    } else {
      this.titleColor = this.WHITE;
    }
  };

  public logout = () => {
    this.authService.logout();
    this.isUserLoggedIn = false;
  };
}
