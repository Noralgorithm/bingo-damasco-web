import { Component, Inject } from '@angular/core';
import { RoomsService } from '../../shared/rooms.service';
import { Room } from 'src/app/shared/types';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
})
export class RoomsPageComponent {
  constructor(
    private roomsService: RoomsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public rooms: Room[] = [];

  ngOnInit() {
    this.roomsService.getAll().subscribe({
      next: (response) => (this.rooms = response.data.rooms),
      error: (error) =>
        this.toastr.error(error?.error?.message || 'unknown error'),
    });
  }

  public goToRoomDetails(roomId: number) {
    this.router.navigateByUrl('/rooms/' + roomId);
  }
}
