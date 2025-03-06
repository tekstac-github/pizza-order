import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
  }

  addItem(itemName: string, quantity: any) {
    // console.log(itemName, quantity)
    this.orderService.addItem(itemName, quantity)
  }

}
	 	  	  	 			  	   	 	
