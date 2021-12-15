import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailPaymentComponent } from './components/add-detail-payment/add-detail-payment.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { DetailPaymentComponent } from './components/detail-payment/detail-payment.component';
import { UpdateDetailPaymentComponent } from './components/update-detail-payment/update-detail-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { httpInterceptorProviders } from '.';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailPaymentComponent,
    LoginComponent,
    NavbarComponent,
    NoPageFoundComponent,
    DetailPaymentComponent,
    UpdateDetailPaymentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
