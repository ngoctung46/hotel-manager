import { Customer } from './customer.model';
import { Room } from './room.model';
import { Service } from './service.model';
export class Order {
    public customerId: string;
    public roomId: string;
    public checkInTime: string;
    public checkOutTime: string;
    public services: Service[];
    public discount: number;
    public total: number;
    constructor(obj?: any) {
        this.customerId     = obj && obj.customerId       || '';
        this.roomId         = obj && obj.roomId           || '';
        this.checkInTime    = obj && obj.checkInTime      || new Date().toString();
        this.checkOutTime   = obj && obj.checkOutTime     || '';
        this.services       = obj && obj.services         || [];
        this.discount       = obj && obj.discount         || 0.0;
        this.total          = obj && obj.total            || 0.0;
    }

    finalizeRoomPrice(days: number, hours: number, minutes: number) : number {
        let price = this.services[0].price;
        if (days <= 0 ) {
            if (hours > 4) {
                return price;
            } else if (hours > 3) {
                return price = 210000;
            } else if (hours > 2) {
                return price = 190000;
            } else if (hours > 1) {
                return price = 150000;
            } else {
                return price = 100000;
            }
        } else {
            return price *= days;
        }
    }

    calculateTotal(days: number, hours: number, minutes: number): number {

        let total = this.finalizeRoomPrice(days, hours, minutes);
        for (let index = 1; index < this.services.length; index++) {
            let service = this.services[index];
            total += service.price * service.quantity;
        }
        return total;
    }
}
