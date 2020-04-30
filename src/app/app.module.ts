import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OddevenComponent } from './oddeven/oddeven.component';
//import { ProductComponent } from './product/product.component';
//import { ProductlistComponent } from './product/productlist/productlist.component';
//import { AboutusComponent } from './product/aboutus/aboutus.component';
//import { ContactusComponent } from './product/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //AboutusComponent,
    //ContactusComponent,
    //ProductlistComponent,
    OddevenComponent,
    //ProductComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
