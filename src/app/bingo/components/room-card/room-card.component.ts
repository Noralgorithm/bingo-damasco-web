import { Component, Input } from '@angular/core';
import { Room } from 'src/app/shared/types';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
})
export class RoomCardComponent {
  @Input() room: Room | null = null;
}
