import { Component, OnInit, HostBinding, Input, ViewChild } from '@angular/core';
import { Room } from '../room.model';
import { Customer } from '../customer.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RoomService } from '../room.service';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Service } from '../service.model';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})

export class RoomCardComponent implements OnInit {
  @ViewChild('customerModal') customerModal;
  @ViewChild('searchForm') searchForm;
  @ViewChild('infoModal') infoModal;
  @ViewChild('orderModal') orderModal;
  @HostBinding('attr.class') cssClass = 'card';
  @Input() room: Room;
  selectedRoom: Room = new Room('', '', 1, 0, false, 1, '', '');
  customerId = '';
  order: Order;
  orderId = '';
  constructor(public fb: FormBuilder,
    public roomService: RoomService,
    public customerService: CustomerService,
    public orderService: OrderService,
    public db: AngularFireDatabase,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
  }

  setSelected(room: Room) {
    this.selectedRoom = room;
  }

  checkOut(room: Room): void {
    room.isOccupied = false;
    room.orderId = '';
    this.roomService.updateRoom(room.$key, {
      isOccupied: false,
      orderId: ''
    });
  }

  showCustomerSearchModal(): void {
    this.searchForm.show();
  }

  addService(room): void {
    this.orderService.addService(room.orderId, new Service({
      description: 'bottle water',
      price: 10000,
      quantity: 2,
      unit: 'bottle'
    }));
    console.log("added service to the room");
  }
}





