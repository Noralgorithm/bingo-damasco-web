import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/types';
import { ApiResponse } from 'src/app/shared/types/api-response';
import { Pagination } from 'src/app/shared/types/pagination';
import { environment } from 'src/environments/environment';

type RoomsPayload = {
  rooms: Room[];
  pagination: Pagination;
};

type RoomPayload = {
  room: Room;
};

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  private http = inject(HttpClient);

  private BASE_URL = environment.BACKEND_URL + 'client/rooms/';

  public getAll() {
    return this.http.get<ApiResponse<RoomsPayload>>(this.BASE_URL);
  }

  public getById(roomId: number) {
    return this.http.get<ApiResponse<RoomPayload>>(`${this.BASE_URL}${roomId}`);
  }
}
