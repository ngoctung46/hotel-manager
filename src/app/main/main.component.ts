import { Component, OnInit, HostBinding } from '@angular/core';
import { RoomService } from './room.service';
import { Room } from './room.model';
import { RoomType, RoomStatus } from './room-type';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CustomerService } from './customer.service'; 
import {Observable} from 'rxjs/Observable';
import { Customer} from './customer.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui main container';
  rooms: FirebaseListObservable<Room[]>;
  constructor(
    private roomService: RoomService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }
}
