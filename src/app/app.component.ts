import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  private readonly WHITE = '#EFE9F4';
  private readonly DARK_GREEN = '#082022';

  private WHITE_BACKGROUND_ROUTES = ['login', 'signup', 'rooms'];

  public pathname: string = '';
  public backgroundColor: string = this.DARK_GREEN;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) return;

      this.updatePathname(event.url);
    });
  }

  private updatePathname(newPathname: string) {
    this.pathname = newPathname;
    this.updateColor();
  }

  private updateColor() {
    if (this.WHITE_BACKGROUND_ROUTES.includes(this.pathname.split('/')[1])) {
      this.backgroundColor = this.WHITE;
    } else {
      this.backgroundColor = this.DARK_GREEN;
    }
  }
}
