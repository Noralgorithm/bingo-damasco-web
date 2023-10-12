import { Component, inject } from '@angular/core';
import { CardsService } from '../../shared/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/shared/types';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
})
export class CardsPageComponent {
  private cardsService = inject(CardsService);
  private activatedRoute = inject(ActivatedRoute);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  public cards: Card[] = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.cardsService.getCards(id).subscribe({
        next: (response) => {
          if (response.data.length < 1) {
            this.toastr.error(
              'Usted no tiene cartones para el siguiente juego'
            );
            this.router.navigateByUrl('/rooms/' + id);
          }
          this.cards = response.data;
        },
        error: (error) =>
          this.toastr.error(error?.error?.message || 'unknown error'),
      });
    });
  }
}
