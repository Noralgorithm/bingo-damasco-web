import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';
import { RoomDetailsPageComponent } from './pages/room-details-page/room-details-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { BuyCardsPageComponent } from './pages/buy-cards-page/buy-cards-page.component';

const routes: Routes = [
  { path: '', component: RoomsPageComponent },
  { path: ':id', component: RoomDetailsPageComponent },
  { path: ':id/cards', component: CardsPageComponent },
  { path: ':id/cards/buy', component: BuyCardsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BingoRoutingModule {}
