import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouCardComponent } from './thankyou-card.component';

describe('ThankyouCardComponent', () => {
  let component: ThankyouCardComponent;
  let fixture: ComponentFixture<ThankyouCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankyouCardComponent]
    });
    fixture = TestBed.createComponent(ThankyouCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
