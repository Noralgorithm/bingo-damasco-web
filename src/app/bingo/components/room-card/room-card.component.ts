import { Component, Input } from '@angular/core';
import { Room } from 'src/app/shared/types';
import { COLOR_VARIANTS } from 'src/app/utils/color-variants';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
})
export class RoomCardComponent {
  @Input() room: Room | null = null;
  @Input() colorIdx: number = 0;

  public colorVariants = COLOR_VARIANTS;
}
