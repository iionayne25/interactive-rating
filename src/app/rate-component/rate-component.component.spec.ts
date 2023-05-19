import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComponentComponent } from './rate-component.component';

describe('RateComponentComponent', () => {
  let component: RateComponentComponent;
  let fixture: ComponentFixture<RateComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateComponentComponent]
    });
    fixture = TestBed.createComponent(RateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
