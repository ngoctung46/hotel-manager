import { Component, HostBinding } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('attr.class') cssClass = "ui container"
  title = 'app works!';
  items: FirebaseListObservable<any>;
  item: FirebaseObjectObservable<any>;
  customers: FirebaseListObservable<any>;
  customer: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('rooms');
    this.customers = db.list('customers');
  }
  getInfo(key: string) {
    this.item = this.db.object(`rooms/${key}`);
    this.item.subscribe(x => console.log(x.name));
    console.log(this.item);
  }
}
