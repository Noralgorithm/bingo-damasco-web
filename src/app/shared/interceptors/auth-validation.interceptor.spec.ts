import { TestBed } from '@angular/core/testing';

import { AuthValidationInterceptor } from './auth-validation.interceptor';

describe('AuthValidationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthValidationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthValidationInterceptor = TestBed.inject(AuthValidationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
