export class Service {
    public description: string;
    public price: number;
    public unit: string;
    public quantity: number;
    constructor(obj?: any) {
        this.description = obj && obj.description || '';
        this.price = obj && obj.price || 0.0;
        this.unit = obj && obj.unit || '';
        this.quantity = obj && obj.quantity || 0.0;
    }
}

export const SERVICES: Service[] = [
    new Service(
        {
            description: `Nước suối`,
            price: 10000,
            unit: `chai`,
            quantity: 1
        }
    ),
    new Service(
        {
            description: `Nước Ngọt`,
            price: 15000,
            unit: `lon`,
            quantity: 1
        }
    ),
    new Service(
        {
            description: `Tiger Beer`,
            price: 17000,
            unit: `can`,
            quantity: 1
        }
    ),
    new Service(
        {
            description: `Heineken Beer`,
            price: 20000,
            unit: `can`,
            quantity: 1
        }
    ),
    new Service(
        {
            description: `Giặt ủi thường`,
            price: 30000,
            unit: `set`,
            quantity: 1
        }
    ),
    new Service(
        {
            description: `Giặt ủi đặc biệt`,
            price: 80000,
            unit: `suit`,
            quantity: 1
        }
    ),
    new Service(
        {
            description: `Phụ thu`,
            price: 0,
            unit: `VNĐ`,
            quantity: 1
        }
    )
]
