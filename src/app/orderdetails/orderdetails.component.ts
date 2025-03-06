import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  flag = 0;
  customerName:string = '';
  phoneNumber:string = '';
  city:string = '';
  storeLocation:string = '';
  error:string = '';
  deliveryAddress:string = '';
  landmark:string = '';
  
//   order:Array<any>=[];
  status = "";
  constructor(private orderService : OrderService,private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.flag = +params['flag'];
      // console.log("Query params", this.flag);
    });
    
    // this.displayOrderDetails();
  }
  calculateBill() {
    // var name = (<HTMLInputElement>document.getElementById("name")).value;
    try {
      this.error='';
      this.validationForDineIn();
      var bill = this.orderService.calculateBill();
      this.status ="Hi "+ this.customerName +", Your order placed successfully. Please pay Rs. "+bill+" and get your order on time";
    } catch(e:any) {
      this.error = e.message;
    }
  }

  calculateDeliveryBill() {
    try {
    // var name = (<HTMLInputElement>document.getElementById("name")).value;
      this.error='';
      this.validationForDelivery();
      var bill = this.orderService.calculateDeliveryBill();
      this.status = "Hi "+ this.customerName +", Your delivery will reach you soon. Please pay Rs. "+bill;
    } catch(e:any) {
      this.error = e.message;
    }
  }
  
//   displayOrderDetails() {
//     this.order = this.orderService.getOrderDetails();
//   }

  validationForDineIn() {
    var str:any = '';
  
    if(this.customerName == undefined || this.customerName.length <= 0) {
      str += 'Provide value for customer name, ';
    }
    if(this.phoneNumber == undefined || this.phoneNumber.length <= 0) {
      str += 'Provide value for phone number, ';
    }
    if(this.city == undefined || this.city.length <= 0) {
      str += 'Provide value for city, ';
    }
    if(this.storeLocation == undefined || this.storeLocation.length <= 0) {
      str += 'Provide value for store location, ';
    }


    if(str != '') {
      throw new Error(str);
    }
  }

  validationForDelivery() {
    var str:any = '';
  
    if(this.customerName == undefined || this.customerName.length <= 0) {
      str += 'Provide value for customer name, ';
    }
    if(this.phoneNumber == undefined || this.phoneNumber.length <= 0) {
      str += 'Provide value for phone number, ';
    }
    if(this.deliveryAddress == undefined || this.deliveryAddress.length <= 0) {
      str += 'Provide value for delivery address, ';
    }
    if(this.landmark == undefined || this.landmark.length <= 0) {
      str += 'Provide value for landmark, ';
    }
    


    if(str != '') {
      throw new Error(str);
    }
  }
    

}	 	  	  	 			  	   	 	
