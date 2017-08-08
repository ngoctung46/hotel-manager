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