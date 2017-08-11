import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { HotelServiceComponent } from './hotel-service/hotel-service.component';
const mainRoutes: Routes = [
    {
        path: 'main',
        component: MainComponent
        // children: [
        //     {
        //         path: 'orders/:id',
        //         component: OrderComponent
        //     },
        //     {
        //         path: 'customer-check-in/:customerId/:roomId',
        //         component: CustomerComponent
        //     },
        //     {
        //         path: 'hotel-services/:orderId',
        //         component: HotelServiceComponent
        //     }
        // ]
    },
    {
        path: 'customer-check-in/:customerId/:roomId',
        component: CustomerComponent
    },
    {
        path: 'orders/:id',
        component: OrderComponent
    },
    {
        path: 'hotel-services/:orderId',
        component: HotelServiceComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            mainRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }