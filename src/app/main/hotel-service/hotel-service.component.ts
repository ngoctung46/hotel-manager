import { Component, OnInit, ViewChild } from '@angular/core';
import { SERVICES, Service } from '../service.model';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
@Component({
  selector: 'app-hotel-service',
  templateUrl: './hotel-service.component.html',
  styleUrls: ['./hotel-service.component.css']
})
export class HotelServiceComponent implements OnInit {
  service: Service = new Service();
  services = SERVICES;
  orderId: string;
  @ViewChild('hotelServiceModal') hotelServiceModal;
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
    });

    this.hotelServiceModal.show();
    (<any>$('.ui.dropdown')).dropdown();
  }

  add() {

    this.orderService.addService(this.orderId, this.service);
    console.log(`Add ${ this.service } to the ${this.orderId}`);
    this.hotelServiceModal.hide();
    location.reload();
  }

}
