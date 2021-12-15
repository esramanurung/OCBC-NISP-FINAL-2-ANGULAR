/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaymentInterceptorInterceptor } from './payment-interceptor.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  // Kita gunakan ini pada Session26Module (session26.module.ts)
  {
    provide: HTTP_INTERCEPTORS,
    useClass: PaymentInterceptorInterceptor,
    multi: true // menandakan HTTP_INTERCEPTORS digunakan di dalam
                // berbagai provider dalam bentuk array
  },
];