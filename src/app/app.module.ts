import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const routes: Routes = [
  {path:"menu", component:MenuComponent},
  {path:"orderDetails", component:OrderdetailsComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }	 	  	  	 			  	   	 	
