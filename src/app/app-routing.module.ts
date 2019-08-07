import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutsComponent } from './produts/produts.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrederSuccessfulComponent } from './oreder-successful/oreder-successful.component';
//import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AuthGaurdService } from './auth-gaurd.service';

import { ProductFormComponent } from './admin/product-form/product-form.component';

import {ForgetPasswordComponent} from './auth/forget-password/forget-password.component';
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'products', component : ProdutsComponent},
  {path : 'shopping-cart', component : ShoppingCartComponent},
  {path : 'forget-password', component : ForgetPasswordComponent},
  {path : 'my/orders', component : MyOrderComponent, canActivate : [AuthGaurdService]},
  {path : 'check-out', component : CheckOutComponent, canActivate : [AuthGaurdService]},
  {path : 'order-success', component : OrederSuccessfulComponent, canActivate : [AuthGaurdService]},
  {path : 'admin/products/new', component : ProductFormComponent, canActivate : [AuthGaurdService]},
  {path : 'admin/products/:id', component : ProductFormComponent, canActivate : [AuthGaurdService]},
  {path : 'admin/products', component : AdminProductsComponent, canActivate : [AuthGaurdService]},
  {path : 'admin/orders', component : AdminOrdersComponent, canActivate : [AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
