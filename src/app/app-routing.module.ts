import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
const routes: Routes = [{ path: 'login', component: LoginComponentComponent },
{ path: '', component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full'},
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
{ path: 'category', component: CategoriesComponent, canActivate: [AuthGuard] },
{ path: 'details', component: CartDetailsComponent, canActivate: [AuthGuard] },
{ path: 'orderplaced', component: OrderPlacedComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
