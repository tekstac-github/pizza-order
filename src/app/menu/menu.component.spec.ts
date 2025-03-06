import {async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { OrderService } from '../order.service';
import { Order } from '../order';


import { tick,fakeAsync, getTestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from, Observable } from 'rxjs';




describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
//   let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [FormsModule,BrowserAnimationsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    // loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the input for veg pizza', fakeAsync (() => {  
    try{
         const compiled = fixture.debugElement.nativeElement;    
         fixture.detectChanges();   
        //  console.log("html ",compiled.innerHTML) ;
      if(compiled.querySelector('#veg1')==null){
        fail("Input / Id for Margherita is not defined in Menu component UI");
      }  
      if(compiled.querySelector('#veg2')==null){
        fail("Input / Id for Double Cheese Margherita is not defined in Menu component UI");
      }  
      if(compiled.querySelector('#veg3')==null){
        fail("Input / Id for Peppy Panner is not defined in Menu component UI");
      }  
      if(compiled.querySelector('#veg4')==null){
        fail("Input / Id for Cheese and Corn is not defined in Menu component UI");
      }  
    }catch{ fail("Input / Id for veg pizza is not defined in Menu component UI");}
  
   }));

   it('should have the input for non veg pizza', fakeAsync (() => {  
    try{
         const compiled = fixture.debugElement.nativeElement;    
         fixture.detectChanges();   
        //  console.log("html ",compiled.innerHTML) ;
      if(compiled.querySelector('#nonVeg1')==null){
        fail("Input / Id for Chicken Golden Delight is not defined in Menu component UI");
      }  
      if(compiled.querySelector('#nonVeg2')==null){
        fail("Input / Id for Non Veg Supreme is not defined in Menu component UI");
      }  
      if(compiled.querySelector('#nonVeg3')==null){
        fail("Input / Id for Chicken Dominator is not defined in Menu component UI");
      }  
      if(compiled.querySelector('#nonVeg4')==null){
        fail("Input / Id for Chicken Pepperoni is not defined in Menu component UI");
      }  
    }catch{ fail("Input / Id for non veg pizza is not defined in Menu component UI");}
  
   }));



/* ***** Testing for TS file ***** */ 

it('should add order details using service', inject([OrderService], (service: OrderService) => {
  try{   
//  component.order=new Order("TN07AB1123", 2);
 component.addItem("Peppy Panner",2);
 component.addItem("Chicken Pepperoni",1);
//  console.log("++++",service.orderList);
 var order=service.orderList;
 if(order !=null && order.length > 0){
     if(order[0].itemName != "Peppy Panner")
         fail("Order details are NOT added using service");
 }
 else
     fail("Order list is empty or less even after adding order using service");
 }catch{ fail("Order list is empty or less even after adding order using service");}    
}));


// **** UI ****
it('should check for UI data are added into Order class', fakeAsync (() => {
  try{

      let ass1 = TestBed.createComponent(MenuComponent);
      let app = ass1.debugElement.componentInstance;
      let comp = ass1.debugElement.nativeElement;

            
    //   router.initialNavigation();
    //   router.navigate(['/home']);
        
      ass1.detectChanges();
      tick(); 
      let veg=comp.querySelector('#veg2');
      veg.value="2"; 
      veg.dispatchEvent(new Event('input'));

     var btn = comp.querySelector("#btn2");
     btn.click();

     let veg1=comp.querySelector('#veg4');
     veg1.value="1"; 
     veg1.dispatchEvent(new Event('input'));

     btn = comp.querySelector("#btn4");
     btn.click();

     let nonVeg=comp.querySelector('#nonVeg1');
     nonVeg.value="2"; 
     nonVeg.dispatchEvent(new Event('input'));

     btn = comp.querySelector("#btn5");
     btn.click();
     
      // comp.message = "Success ";
           
     ass1.detectChanges();
    //   console.log("html***** ",comp.innerHTML) ;
     ass1.whenStable().then(() => {

        ass1.detectChanges();
      console.log("**1112222222",app.orderService.orderList);
      // console.log("**22",app.doctorId.value);
      // console.log("**33",app.job.jobType,"   ",app.job.skills);
      // console.log("html***** ",comp.innerHTML) ;
      
        //  console.log("*******************",comp.message,);      
      
      // console.log( app.job.jobType != "Angular" )
      // console.log( app.job.skills != "Web Developer")
      
      if(app.orderService.orderList != undefined) {
        var arr = app.orderService.orderList
        if(arr !=null && arr.length > 0){
          if(arr[0].itemName != "Double Cheese Margherita" || arr[1].itemName != "Cheese and Corn" || arr[2].itemName != "Chicken Golden Delight")
            fail("Check whether the UI data are added into service class");   

        } else
        fail("Check the logic of addItem() method in service class / Check the logic of addItem method in TS file");
      
      } else {
        fail("Check the whether the orderList array is created to store the orders in orderservice class");
      }
    });
  }
 catch(err){
  console.log(err)
  fail("Check the logic of addItem() method in service class / Check the logic of addItem method in TS file");   
 }
}));



});