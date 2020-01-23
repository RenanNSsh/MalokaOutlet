// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// Dependencies
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TruncateModule } from 'ng2-truncate';

// Project
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './user/access/login/login.component';
import { AuthService } from './guard/auth.service';
import { SignUpComponent } from './user/access/signup/signup.component';
import { AccessComponent } from './user/access/access.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './product/product.service';
import { SearchProductComponent } from './product/search/search.product.component';
import { SearchShopComponent } from './shop/search/search.shop.component';
import { ProductShopComponent } from './shop/product/product.shop.component';
import { BuyShopComponent } from './shop/buy/buy.shop.component';
import { OrderService } from './order/order.service';
import { SuccessPurchaseShop } from './shop/success-purchase/success-purchase.shop.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    SignUpComponent,
    LoginComponent,
    AccessComponent,
    SearchProductComponent,
    SearchShopComponent,
    ProductShopComponent,
    SuccessPurchaseShop,
    BuyShopComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    TruncateModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent, canActivate: [AuthService]},
      { path: 'login', component: AccessComponent},
      { path: 'search-product', component: SearchProductComponent, canActivate: [AuthService]},
      { path: 'shop-product', component: ProductShopComponent},
      { path: 'buy-product', component: BuyShopComponent, canActivate: [AuthService]},
      { path: 'success-purchase', component: SuccessPurchaseShop, canActivate: [AuthService]},
    ])
  ],
  providers: [AuthService, ProductService,OrderService,{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }