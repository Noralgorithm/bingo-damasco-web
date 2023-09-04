import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCardsPageComponent } from './buy-cards-page.component';

describe('BuyCardsPageComponent', () => {
  let component: BuyCardsPageComponent;
  let fixture: ComponentFixture<BuyCardsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCardsPageComponent]
    });
    fixture = TestBed.createComponent(BuyCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
