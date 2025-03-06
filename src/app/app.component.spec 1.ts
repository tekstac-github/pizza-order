import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { async, tick, fakeAsync, TestBed } from '@angular/core/testing';

import { Router, ActivatedRoute } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

import { HttpClient, HttpHandler ,HttpResponse } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppModule,routes } from './app.module';
import {Location} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { Order } from './order';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let fixture: any, fixture1: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        MenuComponent,
        OrderdetailsComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  
  it('should have the router for Menu component' , fakeAsync(() => { 
    try{
       
      router = TestBed.get(Router); 
      location = TestBed.get(Location); 
      fixture = TestBed.createComponent(AppComponent);
      let compiled = fixture.debugElement.nativeElement;  
      
      let btn=compiled.querySelector("#menu")  ;
      btn.click();
      
      fixture1 = TestBed.createComponent(MenuComponent);
      let compiled1 = fixture1.debugElement.nativeElement; 
      router.initialNavigation();
    
      router.navigate(['/menu']); 
      tick(); 
    
      fixture1.detectChanges();
  // console.log("@@@@@@@@@@@@@@@@@@@@"+compiled1.innerHTML);
      if(compiled1.querySelector('#veg')==null){
          fail("Check whether the path is defined properly to navigate to MenuComponent");
        } 
      }catch(err){ 
      //   console.log(err) ;
        fail("Check whether the path is defined properly to navigate to MenuComponent");}
    }));

    
    it('should have the router for Order Details component' , fakeAsync(() => { 
      try{
         
        router = TestBed.get(Router); 
        location = TestBed.get(Location); 
        fixture = TestBed.createComponent(AppComponent);
        let compiled = fixture.debugElement.nativeElement;  
        
        let btn=compiled.querySelector("#orderDetails")  ;
        btn.click();
        
        fixture1 = TestBed.createComponent(OrderdetailsComponent);
        let compiled1 = fixture1.debugElement.nativeElement; 
        router.initialNavigation();
      
        router.navigate(['/orderDetails']); 
        tick(); 
      
        fixture1.detectChanges();
    // console.log("@@@@@@@@@@@@@@@@@@@@"+compiled1.innerHTML);
        if(compiled1.querySelector('#type1')==null){
            fail("Check whether the path is defined properly to navigate to OrderDetailsComponent");
          } 
        }catch(err){ 
        //   console.log(err) ;
          fail("Check whether the path is defined properly to navigate to OrderDetailsComponent");}
      }));

 
});
