import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductAlertsComponent } from './views/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CartComponent } from './views/cart/cart.component';
import { ShippingComponent } from './views/shipping/shipping.component';
 
@NgModule({
 imports: [
   BrowserModule,
   ReactiveFormsModule,
   AppRoutingModule,
   HttpClientModule,
   ReactiveFormsModule
 ],
 declarations: [
   AppComponent,
   TopBarComponent,
   ProductListComponent,
   ProductAlertsComponent,
   ProductDetailsComponent,
   CartComponent,
   ShippingComponent
 ],
 bootstrap: [
   AppComponent
 ]
})
export class AppModule { }