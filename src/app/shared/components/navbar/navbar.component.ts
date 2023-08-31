import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  private readonly WHITE = '#EFE9F4';
  private readonly DARK_GREEN = '#082022';

  public pathname: string = '';
  public showAuthLinks: boolean = true;
  public titleColor: string = this.DARK_GREEN;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      this.updatePathname(event.url);
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
}
