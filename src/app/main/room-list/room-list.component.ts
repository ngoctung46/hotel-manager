import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room.model';
import { RoomType, RoomStatus } from '../room-type';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  @Input() rooms: FirebaseListObservable<Room[]>;
  @HostBinding('attr.class') cssClass = `ui cards`;
  constructor() { }

  ngOnInit() {
  }

}
