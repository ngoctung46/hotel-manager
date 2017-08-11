import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomService } from './room.service';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order.service';
import { CustomerSearchFormComponent } from './customer/customer-search-form.component';
import { CustomerInfoComponent } from './customer/customer-info.component';
import { RouterModule } from '@angular/router';
import { HotelServiceComponent } from './hotel-service/hotel-service.component';
import { MainRoutingModule } from './main-routing.module';
import * as $ from 'jquery';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSemanticModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MainRoutingModule
  ],
  providers: [
    RoomService,
    CustomerService,
    OrderService
  ],
  declarations: [
    MainComponent,
    RoomCardComponent,
    RoomListComponent,
    CustomerComponent,
    OrderComponent,
    CustomerSearchFormComponent,
    CustomerInfoComponent,
    HotelServiceComponent
  ],
  exports: [ MainComponent ]
})
export class MainModule { }
