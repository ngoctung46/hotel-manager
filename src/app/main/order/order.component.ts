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
  IsCheckOut = false;
  customer: Observable<Customer>;
  order: Observable<Order>;
  orderId: string;
  total: number;
  room: Room;
  price: number;
  unit: string;
  quantity: number;
  services: Observable<any[]>;
  loading: boolean;
  timeDiff: number;
  day: number;
  hour: number;
  minutes: number;
  discount: number = 0.0;
  roomId: string;
  constructor(
    private orderService: OrderService,
    private roomService: RoomService,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      this.order = this.orderService.getOrder(params['id']);
      this.order.subscribe((order: Order) => {
        this.roomId = order.roomId;
        this.timeDiff = (new Date().getTime() - new Date(order.checkInTime).getTime()) / 1000;
        this.day = Math.floor(this.timeDiff / 86400);
        this.timeDiff -= this.day * 86400;
        this.hour = Math.floor(this.timeDiff / 3600) % 24;
        this.timeDiff -= this.hour * 3600;
        this.minutes = Math.floor(this.timeDiff / 60) % 60;
        this.customer = this.customerService.getCustomer(order.customerId);
        this.services = this.orderService.getServices(params['id']);
        this.services.subscribe(services => {
          const hours = this.hour + this.minutes / 60;
          if (this.day <= 0) {
            if (hours > 4) {
              this.price = services[0].price;
              this.quantity = 1;
              this.unit = 'day';
            } else if (hours > 3) {
              this.price = services[0].price = 210000;
              this.quantity = 4;
              this.unit = 'hours';
            } else if (hours > 2) {
              this.price = services[0].price = 190000;
              this.quantity = 3;
              this.unit = 'hours';
            } else if (hours > 1) {
              this.price = services[0].price = 150000;
              this.quantity = 2;
              this.unit = 'hours';
            } else {
              this.price = services[0].price = 100000;
              this.quantity = 1;
              this.unit = 'hour';
            }
          } else {
            this.price *= this.day;
            this.quantity = this.day;
            this.unit = 'days';
          }
          this.total = this.price;
          for (let index = 1; index < services.length; index++) {
            const element = services[index];
            this.total += element.price * element.quantity;
          }
        });
      });
    });
    this.orderModal.show({observeChanges: true});

  }

  close() {
    this.orderService.updateOrder(this.orderId, {
      total: this.total,
      checkOutTime: new Date().toString(),
      discount: this.discount
    });
    console.log(this.roomId);
    this.roomService.updateRoom(this.roomId, {
      orderId: '',
      status: 2,
      isOccupied: false
    });
    this.orderModal.hide();
    location.reload();
  }

  remove(key: string) {
    this.orderService.removeService(this.orderId, key);
  }
}
