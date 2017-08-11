import { Component, OnInit, HostBinding, Input, ViewChild } from '@angular/core';
import { Room } from '../room.model';
import { Customer } from '../customer.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RoomService } from '../room.service';
import { CustomerService } from '../customer.service';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Service } from '../service.model';
import { RoomStatus } from '../room-type';

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
  isDirty: boolean;
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
    private location: Location,
    private router: Router) {
  }

  ngOnInit() {
  }

  setSelected(room: Room) {
    this.selectedRoom = room;
  }

  checkOut(room: Room): void {
    this.router.navigate(['/orders', room.orderId], { skipLocationChange: true });
  }

  clean(room: Room): void {
    room.status = 1;
    room.isOccupied = false;
    this.roomService.updateRoom(room.$key, { status: room.status, isOccupied: false });
  }

  showCustomerSearchModal(): void {
    this.searchForm.show();
  }

  markAsDirtyOrClean(room: Room): void {
    if (room.status == 1) room.status = 2;
    else room.status = 1;
    this.roomService.updateRoom(room.$key, { status: room.status });
  }

 
}





