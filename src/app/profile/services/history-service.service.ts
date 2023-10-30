import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponse } from 'src/app/shared/types/api-response';
import { Participation } from 'src/app/shared/types/participation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private httpClient = inject(HttpClient);

  public getHistory = () => {
    return this.httpClient.get<ApiResponse<Participation[]>>(
      environment.BACKEND_URL + 'client/user/my-participations'
    );
  };
}
