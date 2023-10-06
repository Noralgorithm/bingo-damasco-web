import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { RoomDetailsPageComponent } from './pages/room-details-page/room-details-page.component';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { BingoCardComponent } from './components/bingo-card/bingo-card.component';
import { BuyCardsPageComponent } from './pages/buy-cards-page/buy-cards-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

@NgModule({
  declarations: [
    RoomsPageComponent,
    RoomDetailsPageComponent,
    RoomCardComponent,
    CardsPageComponent,
    BingoCardComponent,
    BuyCardsPageComponent,
    GamePageComponent,
  ],
  imports: [CommonModule, BingoRoutingModule],
})
export class BingoModule {}
