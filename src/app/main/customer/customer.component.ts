import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { RoomService } from '../room.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { Service } from '../service.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild('customerModal') customerModal;
  customerForm: FormGroup;
  customerId = '';
  roomId = '';
  doesExist;
  customersObser: Observable<Customer[]>;
  customer: Customer;
  constructor(
    private location: Location,
    private roomService: RoomService,
    private fb: FormBuilder,
    private orderService: OrderService,
    private customerService: CustomerService,
    private route: ActivatedRoute) {
    this.customerForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'id': ['', Validators.required],
      'issueDate': ['', Validators.compose([Validators.required, dateValidator])],
      'expirationDate': ['', Validators.compose([Validators.required, dateValidator])],
      'issueCountry': ['', Validators.required],
      'issueCity': [''],
      'streetAddress': [''],
      'city': [''],
      'country': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.customersObser = this.customerService.getCustomerByID(params['customerId']);
        this.customerId = params['customerId'];
      });
    this.route.params
      .subscribe(parames => this.roomId = parames['roomId']);
    this.customersObser.subscribe(customers => {
      if (customers.length > 0) {
        this.customer = customers[0];
        this.doesExist = true;
        this.disableControls();
      } else {
        this.customer = new Customer();
        this.customer.id = this.customerId;
        this.doesExist = false;
      }
      this.customerModal.show({observeChanges: true});
    });
  }


  async onSubmit(value: any) {
    if (!this.doesExist) {
      const key = this.customerService.addCustomer(value);
    }
    await this.addOrder();
    location.reload();
    this.customerModal.hide();
  }

  async addOrder() {
    const price = this.getPrice(this.roomId);
    const order = new Order(
      {
        customerId: this.customer.$key,
        roomId: this.roomId,
        services: [
          new Service({
            description: 'Room Charge',
            price: 400000,
            unit: 'night',
            quantity: 1
          })
        ]
      });
    const key = this.orderService.addOrder(order);
    await key.then(value => {
      console.log('value: ' + value);
      this.roomService.updateRoom(this.roomId, { orderId: value });
      this.roomService.updateRoom(this.roomId, { isOccupied: true });
    });
  }
  disableControls(): void {
    Object.keys(this.customerForm.controls).forEach(key => {
      this.customerForm.get(key).disable();
    });
  }
  getPrice(roomId: string): number {
    if (roomId === '0' || roomId === '1' || roomId === '2') {
      return 400000;
    }
    return 300000;
  }

}
function dateValidator(control: FormControl): { [s: string]: boolean } {
  const pattern = `(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)`;
  if (control !== undefined && !control.value.match(pattern)) {
    return { invalidDate: true };
  }
}
