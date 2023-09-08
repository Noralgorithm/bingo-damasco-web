import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCardComponent } from './pack-card.component';

describe('PackCardComponent', () => {
  let component: PackCardComponent;
  let fixture: ComponentFixture<PackCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackCardComponent]
    });
    fixture = TestBed.createComponent(PackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
