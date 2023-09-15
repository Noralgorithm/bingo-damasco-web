import { Component, Input } from '@angular/core';
import { obtainNumberDigits } from 'src/app/utils/obtain-number-digits';
@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
})
export class BingoCardComponent {
  @Input() numbers: number[] = [];

  public obtainNumberDigits = (n: number) => {
    const digits = obtainNumberDigits(n);
    if (digits.length === 1) digits.unshift(0);
    return digits;
  };
}
