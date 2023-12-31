import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
  },
  {
    path: 'history',
    component: HistoryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
