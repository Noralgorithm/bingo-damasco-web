import { Component, Input } from '@angular/core';
import { Room } from 'src/app/shared/types';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
})
export class RoomCardComponent {
  @Input() room: Room | null = null;
  @Input() colorIdx: number = 0;

  public colorVariants = [
    'background: #ED0A0A; background: linear-gradient(310deg, #ED0A0A 0%, #E51450 100%);',
    'background: #D7AF70; background: linear-gradient(310deg, #D7AF70 0%, #D88455 100%);',
    'background: #319754; background: linear-gradient(310deg, #319754 0%, #268175 100%);',
    'background: #1B76B9; background: linear-gradient(310deg, #1B76B9 0%, #2C39B5 100%);',
    'background: #953197; background: linear-gradient(310deg, #953197 0%, #7130A7 100%);',
  ];
}
