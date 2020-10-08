import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { AdminLoginComponent } from './components/authentication/admin-login/admin-login.component';
import { RetailerLoginComponent } from './components/authentication/retailer-login/retailer-login.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { RetailerNavComponent } from './components/layout/retailer-nav/retailer-nav.component';
import { AdminNavComponent } from './components/layout/admin-nav/admin-nav.component';
import { CompareComponent } from './components/compare/compare.component';
import { MyOrderComponent } from './components/User/my-order/my-order.component';
import { CartComponent } from './components/User/cart/cart.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { RetailerDashboardComponent } from './components/retailer/retailer-dashboard/retailer-dashboard.component';
import { UserDashboardComponent } from './components/User/user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './components/layout/user-navbar/user-navbar.component';
import { UserPaymnetComponent } from './components/User/user-paymnet/user-paymnet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AdminLoginComponent,
    RetailerLoginComponent,
    ListOfProductsComponent,
    RetailerNavComponent,
    AdminNavComponent,
    CompareComponent,
    MyOrderComponent,
    CartComponent,
    AdminDashboardComponent,
    RetailerDashboardComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserPaymnetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
