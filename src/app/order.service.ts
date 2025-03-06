import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList:Array<any> = [];

  constructor() { }

  

  addItem(itemName: string, quantity: any) {
    var order: Order = new Order( itemName, quantity);
    this.orderList.push(order);
    // console.log("@@",this.orderList);
  }

  getTotalBill() {
    var total = 0
    for(let c of this.orderList) {
      if(c.itemName == "Margherita") {
        total+=(239 * c. quantity);
      } else if(c.itemName == "Double Cheese Margherita") {
        total+=(339 * c. quantity);
      } else if(c.itemName == "Peppy Panner") {
        total+=(439 * c. quantity);
      } else if(c.itemName == "Cheese and Corn") {
        total+=(179 * c. quantity);
      } else if(c.itemName == "Chicken Golden Delight") {
        total+=(559 * c. quantity);
      } else if(c.itemName == "Non Veg Supreme") {
        total+=(499 * c. quantity);
      } else if(c.itemName == "Chicken Dominator") {
        total+=(599 * c. quantity);
      } else if(c.itemName == "Chicken Pepperoni") {	 	  	  	 			  	   	 	
        total+=(599 * c. quantity);
      }
    }
    return total;
  }

  calculateBill() {
    var bill = this.getTotalBill()
    return bill;
  }

  calculateDeliveryBill() {
    var bill = this.getTotalBill() + 20;
    return bill;
  }
  
//   getOrderDetails() {
//     return this.orderList;
//   }
}
