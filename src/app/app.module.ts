import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CartComponent } from './component/cart/cart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { OrderComponent } from './component/order/order.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CatProductComponent } from './component/cat-product/cat-product.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderListComponent } from './component/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProfileComponent,
    ProductInfoComponent,
    OrderComponent,
    NavbarComponent,
    FooterComponent,
    CatProductComponent,
    OrderDetailsComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
