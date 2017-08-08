import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { ROOMS } from './rooms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx'
@Injectable()
export class RoomService {
  constructor(private db: AngularFireDatabase) { }
  getRooms(): FirebaseListObservable<Room[]> {
    return this.db.list('/rooms');
  }
  updateRoom(key: string, data: any): void {
    this.db.list('/rooms').update(key, data);
  }

}
