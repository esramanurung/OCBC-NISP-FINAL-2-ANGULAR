import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailPaymentComponent } from './add-detail-payment.component';

describe('AddDetailPaymentComponent', () => {
  let component: AddDetailPaymentComponent;
  let fixture: ComponentFixture<AddDetailPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
