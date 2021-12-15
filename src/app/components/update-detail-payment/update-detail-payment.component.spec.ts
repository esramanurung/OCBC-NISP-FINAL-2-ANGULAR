import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailPaymentComponent } from './update-detail-payment.component';

describe('UpdateDetailPaymentComponent', () => {
  let component: UpdateDetailPaymentComponent;
  let fixture: ComponentFixture<UpdateDetailPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
