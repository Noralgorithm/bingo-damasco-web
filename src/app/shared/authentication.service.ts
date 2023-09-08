import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './types/api-response';
import { User } from './types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);

  public login(email: string, password: string) {
    return this.http.post<ApiResponse<User>>(
      environment.BACKEND_URL + 'client/login',
      {
        email,
        password,
      }
    );
  }

  public signUp(
    name: string,
    nickname: string,
    email: string,
    password: string
  ) {
    return this.http.post(environment.BACKEND_URL + 'client/register', {
      name,
      nickname,
      email,
      password,
    });
  }

  public logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_data');
  }

  public storeUserData(user: User) {
    if (user.token) localStorage.setItem('access_token', user.token);

    delete user.token;
    localStorage.setItem('user_data', JSON.stringify(user));
  }

  public getUserCredits() {
    return JSON.parse(localStorage.getItem('user_data') || '{}').credits || 0;
  }

  public isUserLoggedIn() {
    if (localStorage.getItem('access_token')) return true;
    return false;
  }

  public updatedUserCredits(newCredits: number) {
    const userData: Omit<User, 'token'> | null = JSON.parse(
      localStorage.getItem('user_data') || '{}'
    );

    if (!userData) return;

    userData.credits = newCredits;
    localStorage.setItem('user_data', JSON.stringify(userData));
  }
}
