import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Card } from 'src/app/shared/types';
import { ApiResponse } from 'src/app/shared/types/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);

  private BASE_URL = environment.BACKEND_URL + 'client/rooms/';

  public getCards(roomId: number) {
    return this.http.get<ApiResponse<Card[]>>(
      this.BASE_URL + roomId + '/cards'
    );
  }
}
