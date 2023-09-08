import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pack-card',
  templateUrl: './pack-card.component.html',
  styleUrls: ['./pack-card.component.css'],
})
export class PackCardComponent {
  @Input() title: string = '';
  @Input() credits: string = '';
  @Input() price: string = '';
  @Input() color: 'yellow' | 'blue' | 'purple' = 'yellow';

  public colorVariants = {
    yellow:
      'background: #D7AF70; background: linear-gradient(310deg, #D7AF70 0%, #D88455 100%);',
    blue: 'background: #1B76B9; background: linear-gradient(310deg, #1B76B9 0%, #2C39B5 100%);',
    purple:
      'background: #953197; background: linear-gradient(310deg, #953197 0%, #7130A7 100%);',
  };
}
