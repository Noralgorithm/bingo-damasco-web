import { Component, Input } from '@angular/core';
import { COLOR_VARIANTS } from 'src/app/utils/color-variants';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css'],
})
export class BallComponent {
  @Input() colorIdx = 0;

  public colorVariants = COLOR_VARIANTS;
}
