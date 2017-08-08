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
        this.checkInTime    = obj && obj.checkInTime      || new Date().toLocaleString();
        this.checkOutTime   = obj && obj.checkOutTime     || '';
        this.services       = obj && obj.services         || [];
        this.discount       = obj && obj.discount         || 0.0;
        this.total          = obj && obj.total            || 0.0;
    }
}
