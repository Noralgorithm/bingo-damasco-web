import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  private httpClient = inject(HttpClient);

  private BASE_URL = environment.BACKEND_URL + 'client/paypal';

  public createOrder(value: string) {
    return this.httpClient.post(this.BASE_URL + '/create_order', { value });
  }
}
