import { Component, Input, inject } from '@angular/core';
import { PaypalService } from '../../services/paypal.service';
import { ToastrService } from 'ngx-toastr';

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

  private paypalService = inject(PaypalService);
  private toastr = inject(ToastrService);

  public colorVariants = {
    yellow:
      'background: #D7AF70; background: linear-gradient(310deg, #D7AF70 0%, #D88455 100%);',
    blue: 'background: #1B76B9; background: linear-gradient(310deg, #1B76B9 0%, #2C39B5 100%);',
    purple:
      'background: #953197; background: linear-gradient(310deg, #953197 0%, #7130A7 100%);',
  };

  public paypalButtonHandler = () => {
    console.log(this.price);
    this.paypalService.createOrder(this.price + '.00').subscribe({
      next: (response: any) => {
        console.log(response);
        const link = response.data.links[1].href;
        window.location.href = link;
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error?.message);
      },
    });
  };
}
