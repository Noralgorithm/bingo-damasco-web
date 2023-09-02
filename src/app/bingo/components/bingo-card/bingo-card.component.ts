import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
})
export class BingoCardComponent {
  @Input() numbers: number[] = [];
}
