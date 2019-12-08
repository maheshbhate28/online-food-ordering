import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { HomeService } from './service/home.service';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    CartDetailsComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService,
    AuthService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    LoginService,
    HttpClient,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
