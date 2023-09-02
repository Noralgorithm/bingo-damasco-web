import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../../shared/rooms.service';
import { ToastrService } from 'ngx-toastr';
import { Room } from 'src/app/shared/types';

@Component({
  selector: 'app-room-details-page',
  templateUrl: './room-details-page.component.html',
})
export class RoomDetailsPageComponent {
  constructor(
    private roomsService: RoomsService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  public room: Room | null = null;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.roomsService.getById(id).subscribe({
        next: (response) => {
          this.room = response.data.room;
        },
        error: (error) => this.toastr.error(error?.error?.message),
      });
    });
  }
}
