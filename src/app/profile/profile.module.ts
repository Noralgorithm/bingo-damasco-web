import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
