import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import { catchError } from 'rxjs/operators';
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
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status !== 401 && error.status !== 403) throw error;

        this.authenticationService.logout();
        this.router.navigateByUrl('/login');

        throw error;
      })
    );
  }
}
