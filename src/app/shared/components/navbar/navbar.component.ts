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

  private readonly DARK_GREEN_TEXT_COLOR_ROUTES = ['login', 'signup', 'rooms'];

  public pathname: string = '';
  public showAuthLinks: boolean = true;
  public textColor: string = this.DARK_GREEN;
  public isUserLoggedIn = this.authService.isUserLoggedIn();
  public userCredits = 0;

  public sidenavBackgroundDisplay: 'block' | 'none' = 'none';
  public sidenavPosition: '0vw' | '-65vw' = '-65vw';

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      this.updatePathname(event.url);
      this.isUserLoggedIn = this.authService.isUserLoggedIn();
      this.userCredits = this.authService.getUserCredits() || 0;
    });
  }

  private updatePathname = (newPathname: string) => {
    this.pathname = newPathname;

    this.showAuthLinks =
      this.pathname !== '/login' && this.pathname !== '/signup';

    this.updateTitleColor();
  };

  private updateTitleColor = () => {
    if (
      this.DARK_GREEN_TEXT_COLOR_ROUTES.includes(this.pathname.split('/')[1])
    ) {
      this.textColor = this.DARK_GREEN;
    } else {
      this.textColor = this.WHITE;
    }
  };

  public logout = () => {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.router.navigateByUrl('/');
  };

  public openSidenav = () => {
    this.sidenavBackgroundDisplay = 'block';
    this.sidenavPosition = '0vw';
  };

  public closeSidenav = () => {
    this.sidenavBackgroundDisplay = 'none';
    this.sidenavPosition = '-65vw';
  };
}
