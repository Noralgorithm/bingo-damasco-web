import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplacePageComponent } from './pages/marketplace-page/marketplace-page.component';
import { PackCardComponent } from './components/pack-card/pack-card.component';

@NgModule({
  declarations: [
    MarketplacePageComponent,
    PackCardComponent,
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
