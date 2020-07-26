export class Vehicle {
    year: number;
    protected model: string;
    private sku: string;

    protected setSKU(sku?:string) {
        this.sku = sku;
    }
}
