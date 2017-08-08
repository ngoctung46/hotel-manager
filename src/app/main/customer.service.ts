import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Customer } from './customer.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {
  customers: FirebaseListObservable<Customer[]>;
  constructor(public db: AngularFireDatabase) {
    this.customers = db.list('/customers');
  }
  addCustomer(customer: Customer): any {
    return this.db.list('/customers').push(customer).then(item => item.key);
  }
  getCustomers(): Observable<Customer[]> {
    return this.customers;
  }

  getCustomer(key: string): Observable<Customer> {
    return this.db.object(`customers/${key}`);
  }

  getCustomerByID(id: string): Observable<Customer[]> {
    return this.db.list('customers', {
      query: {
        orderByChild: 'id',
        equalTo: id,
      }
    });
  }
}
