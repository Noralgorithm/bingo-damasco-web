import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthValidationInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const nextHandler = next.handle(request);

    nextHandler.subscribe({
      error: (res) => {
        if (!res) return;
        res = res as HttpResponse<unknown>;
        if (res.status === 401) {
          this.authenticationService.logout();
          this.router.navigateByUrl('/login');
        }
      },
    });
    return nextHandler;
  }
}
