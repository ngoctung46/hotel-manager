import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Service } from './service.model';
@Injectable()
export class OrderService {

  constructor(public db: AngularFireDatabase) { }
  addOrder(order): any {
    return this.db.list('/orders').push(order).then(item => item.key);
  }
  getOrder(key: string): Observable<any> {
    return this.db.object(`/orders/${key}`);
  }
  addService(key: string, service: Service): any {
    return this.db.list(`/orders/${key}/services`).push(service);
  }
  getServices(key: string): Observable<Service[]> {
    return this.db.list(`/orders/${key}/services`);
  }
}
