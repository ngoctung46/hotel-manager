export class Customer {
    public $key: string;
    public $ref: string;
    public id: string;
    public firstName: string;
    public lastName: string;
    public streetAddress: string;
    public city: string;
    public country: string;
    public issueDate: string;
    public expirationDate: string;
    public issueCity: string;
    public issueCountry: string;
    constructor(obj?: any) {
        this.$key               = obj && obj.$key                   || '';
        this.$ref               = obj && obj.$ref                   || '';
        this.id                 = obj && obj.id                     || '';
        this.lastName           = obj && obj.lastName               || '';
        this.firstName          = obj && obj.firstName              || '';
        this.streetAddress      = obj && obj.streetAddress          || '';
        this.city               = obj && obj.city                   || '';
        this.country            = obj && obj.country                || '';
        this.issueDate          = obj && obj.issueDate              || '';
        this.expirationDate     = obj && obj.expirationDate         || '';
        this.issueCity          = obj && obj.issueCity              || '';
        this.issueCountry       = obj && obj.issueCountry           || '';
    }
}
