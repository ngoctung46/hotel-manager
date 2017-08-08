import { RoomType, RoomStatus } from './room-type';
import { Customer } from '../main/customer.model';
export class Room {
    constructor(
        public $key: string,
        public name: string,
        public type: RoomType,
        public price: number,
        public isOccupied: boolean,
        public status: RoomStatus,
        public imgUrl: string,
        public orderId = ''
    ) {}
}
