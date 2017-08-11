import { Component, OnInit } from '@angular/core';
import { OrderService } from '../main/order.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

}
