import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { CustomerService } from '../customer.service';
import { RoomService } from '../room.service';
import { Room } from '../room.model';
import { Order } from '../order.model';
import { Customer } from '../customer.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('orderModal') orderModal;
  customer: Observable<Customer>;
  order: Observable<Order>;
  room: Room;
  services: Observable<any[]>;
  loading: boolean;
  constructor(
    private orderService: OrderService,
    private roomService: RoomService,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.order = this.orderService.getOrder(params['id']);
      this.order.subscribe(order => {
        this.customer = this.customerService.getCustomer(order.customerId);
        this.services = this.orderService.getServices(params['id']);
        this.orderModal.show();
      });
    });
  }
}
