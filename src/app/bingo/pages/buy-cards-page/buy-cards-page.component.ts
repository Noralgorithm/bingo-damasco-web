import { Component, inject } from '@angular/core';
import { CardsService } from '../../shared/cards.service';
import { ToastrService } from 'ngx-toastr';
import { Card, Room } from 'src/app/shared/types';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../../shared/rooms.service';

@Component({
  selector: 'app-buy-cards-page',
  templateUrl: './buy-cards-page.component.html',
})
export class BuyCardsPageComponent {
  private cardsService = inject(CardsService);
  private roomsService = inject(RoomsService);
  private activatedRoute = inject(ActivatedRoute);
  private toastr = inject(ToastrService);

  public room: Room | null = null;
  public cards: Card[] = [];
  public quantity = 1;

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

  public incrementQuantity() {
    if (this.quantity < 10) this.quantity++;
  }

  public decrementQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  public generateCards() {
    if (!this.room) return;
    this.cardsService
      .generateCards(this.room.id, this.quantity)
      .subscribe((response) => {
        console.log(response)
        this.cards = response.data;
      });
  }
}
