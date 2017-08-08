import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomService } from './room.service';
import { NgSemanticModule } from 'ng-semantic';
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
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSemanticModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'orders/:id',
        component: OrderComponent
      },
      {
        path: 'customer-check-in/:customerId/:roomId',
        component: CustomerComponent
      },
      {
        path: 'hotel-services',
        component: HotelServiceComponent
      }
    ]),
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
