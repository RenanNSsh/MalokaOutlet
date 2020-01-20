// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Dependencies
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    SignUpComponent,
    LoginComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent},
      { path: 'login', component: AccessComponent}
    ])
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// { path: 'product', component: ProductComponent, canActivate: [AuthService]},
