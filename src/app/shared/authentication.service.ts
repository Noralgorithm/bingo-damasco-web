import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);

  public login(email: string, password: string) {
    return this.http.post(environment.BACKEND_URL + 'client/login', {
      email,
      password,
    });
  }

  public signUp(email: string, password: string) {
    return this.http.post(environment.BACKEND_URL + 'client/register', {
      email,
      password,
    });
  }

  public logout() {
    localStorage.removeItem('access_token');
  }

  public storeUserToken(token: string) {
    localStorage.setItem('access_token', JSON.stringify(token));
  }

  public isUserLoggedIn() {
    if (localStorage.getItem('access_token')) return true;
    return false;
  }
}
