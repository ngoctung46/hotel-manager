import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hotel-service',
  templateUrl: './hotel-service.component.html',
  styleUrls: ['./hotel-service.component.css']
})
export class HotelServiceComponent implements OnInit {
  @ViewChild('hotelServiceModal') hotelServiceModal;
  constructor() { }

  ngOnInit() {
    this.hotelServiceModal.show();
  }

}
