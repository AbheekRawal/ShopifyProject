import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/authentication/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { RetailerLoginComponent } from './components/authentication/retailer-login/retailer-login.component';
import { CompareComponent } from './components/compare/compare.component';
import { IndexComponent } from './components/index/index.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { RetailerDashboardComponent } from './components/retailer/retailer-dashboard/retailer-dashboard.component';
import { CartComponent } from './components/User/cart/cart.component';
import { MyOrderComponent } from './components/User/my-order/my-order.component';
import { UserDashboardComponent } from './components/User/user-dashboard/user-dashboard.component';
import { UserPaymnetComponent } from './components/User/user-paymnet/user-paymnet.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // redirect to `index component`
  { path: 'index', component: IndexComponent },
  // Login
  { path: 'login', component: LoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'retailerLogin', component: RetailerLoginComponent },
  // Register
  { path: 'register', component: RegisterComponent },
  // Other Pages
  { path: 'products', component: ListOfProductsComponent },
  { path: 'compare', component: CompareComponent },
  // Admin Dashboard
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'retailerDashboard', component: RetailerDashboardComponent },
  // UserComponent Routes
  { path: 'cart', component: CartComponent },
  { path: 'myOrder', component: MyOrderComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'userPayment', component: UserPaymnetComponent },
  // Auth
  { path: 'forgot', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
