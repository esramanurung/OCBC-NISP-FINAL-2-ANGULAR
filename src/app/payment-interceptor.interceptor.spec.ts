import { TestBed } from '@angular/core/testing';

import { PaymentInterceptorInterceptor } from './payment-interceptor.interceptor';

describe('PaymentInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PaymentInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PaymentInterceptorInterceptor = TestBed.inject(PaymentInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
