import { async, ComponentFixture, TestBed,inject,tick,fakeAsync, getTestBed } from '@angular/core/testing';
import {RouterTestingModule,} from "@angular/router/testing";
import {Router,ActivatedRoute} from "@angular/router";
import { HttpClient, HttpHandler ,HttpResponse } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppModule,routes } from '../app.module';
import {Location} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { from, Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { NgModule } from '@angular/core';
import { OrderdetailsComponent } from './orderdetails.component';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { MenuComponent } from '../menu/menu.component';



describe('OrderdetailsComponent', () => {
  let fixture1:any,fixture2:any,fixure3:any,app1,app2:any,app3;
  let httpMock: HttpTestingController;
  let queryParams=new Map;
  
  let component: OrderdetailsComponent;
  let fixture: ComponentFixture<OrderdetailsComponent>;
//   let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, MenuComponent,OrderdetailsComponent  ],
      imports: [FormsModule,RouterTestingModule.withRoutes(routes), HttpClientTestingModule,BrowserAnimationsModule,ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
	    providers: [OrderService,HttpClientTestingModule ], 

  }).compileComponents();
  }));
 
   beforeEach(() => {
      fixture1 = TestBed.createComponent(AppComponent);
      app1 = fixture1.componentInstance;
      fixture2 = TestBed.createComponent(OrderdetailsComponent);
      app2 = fixture2.componentInstance;
      // fixture1.detectChanges();
  }); 
  
  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailsComponent);
    // loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the input components for Pickup/Dine-in Type', fakeAsync (() => {    
    try{
   
       const compiled = fixture2.debugElement.nativeElement;
       let router: Router;
       let location: Location;
     
     router = TestBed.get(Router); 
       location = TestBed.get(Location); 
     TestBed.get(ActivatedRoute).queryParams = of({ flag : 1 });
     
     router.initialNavigation();
     router.navigate(['/orderDetails']);
     
       fixture1.detectChanges();
     fixture2.detectChanges();
     tick(); 
     // console.log("+++++++++",compiled);  
     if(compiled.querySelector('#name')==null){
       fail("Input/ID for Customer Name  is not defined when flag value is 1");
     }    
     if(compiled.querySelector('#phone')==null){
       fail("Input/ID for Phone Number is not defined when flag value is 1");
     }
     if(compiled.querySelector('#city')==null){
       fail("Input/ID for City is not defined when flag value is 1");
     }
     if(compiled.querySelector('#store')==null){
       fail("Input/ID for Store Location is not defined when flag value is 1");
     }
     if(compiled.querySelector('#time')==null){
       fail("Input/ID for Pickup/Dine-in Time is not defined when flag value is 1");
     }   
     if(compiled.querySelector('#submit')==null){
       fail("Button/ID for Submit is not defined when flag value is 1");
     }
   }catch(err){   
     fail("Input for Customer Name/ Phone Number/ City/ Store Location/ Pickup/Dinein time is not defined when flag value is 1"); } 
  })); 



  it('should have the input components for Delivery type', fakeAsync (() => {    
    try{
   
       const compiled = fixture2.debugElement.nativeElement;
       let router: Router;
       let location: Location;
     
     router = TestBed.get(Router); 
       location = TestBed.get(Location); 
     TestBed.get(ActivatedRoute).queryParams = of({ flag : 2 });
     
     router.initialNavigation();
     router.navigate(['/orderDetails']);
     
       fixture1.detectChanges();
     fixture2.detectChanges();
     tick(); 
     // console.log("+++++++++",compiled);  
     if(compiled.querySelector('#name')==null){
       fail("Input/ID for Customer Name  is not defined when flag value is 2");
     }    
     if(compiled.querySelector('#phone')==null){
       fail("Input/ID for Phone Number is not defined when flag value is 2");
     }
     if(compiled.querySelector('#address')==null){
       fail("Input/ID for Delivery Address is not defined when flag value is 2");
     }
     if(compiled.querySelector('#landmark')==null){
       fail("Input/ID for Landmark is not defined when flag value is 2");
     }
     if(compiled.querySelector('#submit')==null){
       fail("Button/ID for Submit is not defined when flag value is 2");
     }
   }catch(err){   
     fail("Input for Customer Name/ Phone Number/ Delivery Address/ Landmark  is not defined when flag value is 2"); } 
  })); 

  // *** Testing for Ts file ***

  it('should check for calculateBill method', inject([OrderService], (service: OrderService) => {
    try{
      const mockBook=[ { itemName: "Peppy Panner", quantity: 1},           ​
                  { itemName: "Non Veg Supreme", quantity: 2 }]

      service.orderList=mockBook;
        // console.log("++++",service.orderList);
      var bill=service.calculateBill();
      // console.log("++++",bill)
      if(bill != 1437) {
        fail("Should calculate the pickup/dine-in bill amount properly by using calculateBill() method");
      }

    }catch{ fail("Should calculate the pickup/dine-in bill amount properly by using calculateBill() method");} 

  }));


  it('should check for calculateDeliveryBill method', inject([OrderService], (service: OrderService) => {
    try{
      const mockBook=[ { itemName: "Peppy Panner", quantity: 1},           ​
                  { itemName: "Non Veg Supreme", quantity: 2 }]

      service.orderList=mockBook;
        // console.log("++++",service.orderList);
      var bill=service.calculateDeliveryBill();
      // console.log("++++",bill)
      if(bill != 1457) {
        fail("Should calculate the delivery bill amount properly by using calculateDeliveryBill() method");
      }


    }catch{ fail("Should calculate the delivery bill amount properly by using calculateDeliveryBill() method");} 

  }));

// **** validation for dine-in/pick-up ****

it('should perform validation for dine-in/pick-up orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 1 });
        
      ass1.detectChanges();
      tick(); 
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

   
      // console.log("**",app.car);
      
      // console.log("**22",app.doctorId.value);
      // console.log("**33",app.job.jobType,"   ",app.job.skills);
      // console.log("html***** ",comp.innerHTML) ;
      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for city, Provide value for store location,";
        // var actual:string = "Provide value for car number, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message for pick-up/dine-in order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message for pick-up/dine-in order details");   
 }
}));

it('should perform validation of customer name in dine-in/pick-up orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 1 });
        
      ass1.detectChanges();
      tick(); 

      // let customerName=comp.querySelector('#name');
      // customerName.value="Ajay";
      // customerName.dispatchEvent(new Event('input'));

      let phoneNumber=comp.querySelector('#phone');
      phoneNumber.value='9876543210';
      phoneNumber.dispatchEvent(new Event('input'));

      let city=comp.querySelector('#city');
      city.value="Delhi"; 
      city.dispatchEvent(new Event('input'));
      
      let storeLocation=comp.querySelector('#store');
      storeLocation.value="North venue"; 
      storeLocation.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for city, Provide value for store location,";
        var actual:string = "Provide value for customer name, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of customer name for pick-up/dine-in order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of customer name for pick-up/dine-in order details");   
 }
}));

it('should perform validation of phone number in dine-in/pick-up orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 1 });
        
      ass1.detectChanges();
      tick(); 

      let customerName=comp.querySelector('#name');
      customerName.value="Ajay";
      customerName.dispatchEvent(new Event('input'));

      // let phoneNumber=comp.querySelector('#phone');
      // phoneNumber.value='9876543210';
      // phoneNumber.dispatchEvent(new Event('input'));

      let city=comp.querySelector('#city');
      city.value="Delhi"; 
      city.dispatchEvent(new Event('input'));
      
      let storeLocation=comp.querySelector('#store');
      storeLocation.value="North venue"; 
      storeLocation.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for city, Provide value for store location,";
        var actual:string = "Provide value for phone number, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of phone number for pick-up/dine-in order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of phone number for pick-up/dine-in order details");   
 }
}));

it('should perform validation of city in dine-in/pick-up orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 1 });
        
      ass1.detectChanges();
      tick(); 

      let customerName=comp.querySelector('#name');
      customerName.value="Ajay";
      customerName.dispatchEvent(new Event('input'));

      let phoneNumber=comp.querySelector('#phone');
      phoneNumber.value='9876543210';
      phoneNumber.dispatchEvent(new Event('input'));

      // let city=comp.querySelector('#city');
      // city.value="Delhi"; 
      // city.dispatchEvent(new Event('input'));
      
      let storeLocation=comp.querySelector('#store');
      storeLocation.value="North venue"; 
      storeLocation.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for city, Provide value for store location,";
        var actual:string = "Provide value for city, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of city for pick-up/dine-in order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of city for pick-up/dine-in order details");   
 }
}));

it('should perform validation of store location in dine-in/pick-up orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 1 });
        
      ass1.detectChanges();
      tick(); 

      let customerName=comp.querySelector('#name');
      customerName.value="Ajay";
      customerName.dispatchEvent(new Event('input'));

      let phoneNumber=comp.querySelector('#phone');
      phoneNumber.value='9876543210';
      phoneNumber.dispatchEvent(new Event('input'));

      let city=comp.querySelector('#city');
      city.value="Delhi"; 
      city.dispatchEvent(new Event('input'));
      
      // let storeLocation=comp.querySelector('#store');
      // storeLocation.value="North venue"; 
      // storeLocation.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for city, Provide value for store location,";
        var actual:string = "Provide value for store location, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of store location for pick-up/dine-in order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of store location for pick-up/dine-in order details");   
 }
}));


// **** validation for delivery ****

it('should perform validation for delivery orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 2 });
        
      ass1.detectChanges();
      tick(); 

      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for delivery address, Provide value for landmark,";
        // var actual:string = "Provide value for customer name, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of customer name for delivery order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of customer name for delivery order details");   
 }
}));

it('should perform validation of customer name in delivery orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 2 });
        
      ass1.detectChanges();
      tick(); 

      // let customerName=comp.querySelector('#name');
      // customerName.value="Ajay";
      // customerName.dispatchEvent(new Event('input'));

      let phoneNumber=comp.querySelector('#phone');
      phoneNumber.value='9876543210';
      phoneNumber.dispatchEvent(new Event('input'));

      let deliveryAddress=comp.querySelector('#address');
      deliveryAddress.value="Delhi"; 
      deliveryAddress.dispatchEvent(new Event('input'));
      
      let landmark=comp.querySelector('#landmark');
      landmark.value="North venue"; 
      landmark.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for delivery address, Provide value for landmark,";
        var actual:string = "Provide value for customer name, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of customer name for delivery order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of customer name for delivery order details");   
 }
}));

it('should perform validation of phone number in delivery orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 2 });
        
      ass1.detectChanges();
      tick(); 

      let customerName=comp.querySelector('#name');
      customerName.value="Ajay";
      customerName.dispatchEvent(new Event('input'));

      // let phoneNumber=comp.querySelector('#phone');
      // phoneNumber.value='9876543210';
      // phoneNumber.dispatchEvent(new Event('input'));

      let deliveryAddress=comp.querySelector('#address');
      deliveryAddress.value="Delhi"; 
      deliveryAddress.dispatchEvent(new Event('input'));
      
      let landmark=comp.querySelector('#landmark');
      landmark.value="North venue"; 
      landmark.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for delivery address, Provide value for landmark,";
        var actual:string = "Provide value for phone number, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of phone number for delivery order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of phone number for delivery order details");   
 }
}));

it('should perform validation of delivery address in delivery orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 2 });
        
      ass1.detectChanges();
      tick(); 

      let customerName=comp.querySelector('#name');
      customerName.value="Ajay";
      customerName.dispatchEvent(new Event('input'));

      let phoneNumber=comp.querySelector('#phone');
      phoneNumber.value='9876543210';
      phoneNumber.dispatchEvent(new Event('input'));

      // let deliveryAddress=comp.querySelector('#address');
      // deliveryAddress.value="Delhi"; 
      // deliveryAddress.dispatchEvent(new Event('input'));
      
      let landmark=comp.querySelector('#landmark');
      landmark.value="North venue"; 
      landmark.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for delivery address, Provide value for landmark,";
        var actual:string = "Provide value for delivery address, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of delivery address for delivery order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of delivery address for delivery order details");   
 }
}));

it('should perform validation of landmark in delivery orders', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(OrderdetailsComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

      // const compiled = fixture2.debugElement.nativeElement;            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
    TestBed.get(ActivatedRoute).queryParams = of({ flag : 2 });
        
      ass1.detectChanges();
      tick(); 

      let customerName=comp.querySelector('#name');
      customerName.value="Ajay";
      customerName.dispatchEvent(new Event('input'));

      let phoneNumber=comp.querySelector('#phone');
      phoneNumber.value='9876543210';
      phoneNumber.dispatchEvent(new Event('input'));

      let deliveryAddress=comp.querySelector('#address');
      deliveryAddress.value="Delhi"; 
      deliveryAddress.dispatchEvent(new Event('input'));
      
      // let landmark=comp.querySelector('#landmark');
      // landmark.value="North venue"; 
      // landmark.dispatchEvent(new Event('input'));
      
     var  btn = comp.querySelector("#submit");
     btn.click();
                
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

      ass1.detectChanges();     
      
      var resMessage: string =   app.error;
      if(resMessage == undefined) {
        fail("Check the whether the error variable is created for validation message");
      } else {
         resMessage = resMessage.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
         
         console.log("*************errorRes",resMessage);      
        // var actual:string = "Provide value for customer name, Provide value for phone number, Provide value for delivery address, Provide value for landmark,";
        var actual:string = "Provide value for landmark, ";
        actual = actual.toLowerCase().replace(/\s/g, '').replace(/,/g, '');
        console.log("*************errorAct",actual);
        // console.log("@@@@",resMessage.includes(actual));
      
      if(!resMessage.includes(actual))
        fail("Check the validation message of landmark for delivery order details");   
      }});
  }
 catch(err){
  console.log(err)
  fail("Check the validation message of landmark for delivery order details");   
 }
}));


});