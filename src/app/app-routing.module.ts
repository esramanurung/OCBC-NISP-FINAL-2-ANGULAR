import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPaymentComponent } from './components/detail-payment/detail-payment.component';
import { LoginComponent } from './components/login/login.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateDetailPaymentComponent } from './components/update-detail-payment/update-detail-payment.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: DetailPaymentComponent},
  {path:'update/:id', component: UpdateDetailPaymentComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
