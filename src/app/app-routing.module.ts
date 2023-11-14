import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { CatProductComponent } from './component/cat-product/cat-product.component';
import { HomeGuard } from './guard/home.guard';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginGuard } from './guard/login.guard';
import { OrderComponent } from './component/order/order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cat_product/:id',component:CatProductComponent},
  {path:'product_info/:p_id',component:ProductInfoComponent,canActivate:[HomeGuard]},
  {path:'cart',component:CartComponent,canActivate:[HomeGuard]},
  {path:'order',component:OrderComponent,canActivate:[HomeGuard]},
  {path:'order_details/:order_id',component:OrderDetailsComponent,canActivate:[HomeGuard]},
  {path:'order_list',component:OrderListComponent,canActivate:[HomeGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[HomeGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
