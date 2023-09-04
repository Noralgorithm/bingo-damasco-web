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

  public generateCards(roomId: number, quantity: number) {
    return this.http.post<ApiResponse<Card[]>>(
      this.BASE_URL + roomId + '/generate_cards',
      {
        quantity,
      }
    );
  }

  public buyCards(roomId: number, cardsIds: number[]) {
    return this.http.post<ApiResponse<null>>(
      this.BASE_URL + roomId + '/buy_cards',
      {
        cardsIds,
      }
    );
  }
}
