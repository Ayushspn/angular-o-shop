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
import { SignupComponent } from './auth/signup/signup.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {ForgetPasswordComponent} from './auth/forget-password/forget-password.component';
const routes: Routes = [
  {path : '', component : HomeComponent, pathMatch: 'full'},
  {path : 'sign-up', component: SignupComponent },
  {path : 'products', component : ProdutsComponent},
  {path : 'shopping-cart', component : ShoppingCartComponent},
  {path : 'forget-password', component : ForgetPasswordComponent},
  {path : 'my/orders', component : MyOrderComponent},
  {path : 'check-out', component : CheckOutComponent},
  {path : 'order-success', component : OrederSuccessfulComponent},
  {path : 'admin/products/new', component : ProductFormComponent},
  {path : 'admin/products/:id', component : ProductFormComponent},
  {path : 'admin/products', component : AdminProductsComponent},
  {path : 'profile', component : AdminOrdersComponent},
  {path : 'delivery-address', component : DeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
