import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BallComponent } from './components/ball/ball.component';

@NgModule({
  declarations: [NavbarComponent, BallComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, BallComponent],
})
export class SharedModule {}
