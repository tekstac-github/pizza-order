import {async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import { Order } from './order';
import { NgModule } from '@angular/core';
import { tick,fakeAsync, getTestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from, Observable } from 'rxjs';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('check for getTotalBill method', inject([OrderService], (service: OrderService) => {
    try{
      const mockBook=[ { itemName: "Chicken Golden Delight", quantity: 1},  
                  { itemName: "Non Veg Supreme", quantity: 2 }]

      service.orderList=mockBook;
        // console.log("++++",service.orderList);
      var bill=service.getTotalBill();
      // console.log("++++",bill)
      if(bill != 1557) {
        fail("Should calculate the bill properly by using getTotalBill() method");
      }


    }catch{ fail("Should calculate the bill properly by using getTotalBill() method");} 

  }));

});
