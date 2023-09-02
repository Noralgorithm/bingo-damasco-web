import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsPageComponent } from './room-details-page.component';

describe('RoomDetailsPageComponent', () => {
  let component: RoomDetailsPageComponent;
  let fixture: ComponentFixture<RoomDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomDetailsPageComponent]
    });
    fixture = TestBed.createComponent(RoomDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
