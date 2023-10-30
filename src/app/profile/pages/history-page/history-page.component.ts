import { Component, inject } from '@angular/core';
import { HistoryService } from '../../services/history-service.service';
import { ToastrService } from 'ngx-toastr';
import { Participation } from 'src/app/shared/types/participation';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  private toastr = inject(ToastrService);
  private historyService = inject(HistoryService);

  public history: Participation[] = [];

  ngOnInit() {
    this.historyService.getHistory().subscribe({
      next: (res) => {
        this.history = res.data;
      },
      error: (err) => {
        this.toastr.error(err.message);
      },
    });
  }
}
