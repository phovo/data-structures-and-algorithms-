import { Vehicle } from './vehicle'
export class VehicleVariant extends Vehicle {
    static count:number = 6;
     id: number;
    code: string;
    name: string; //public name: string; 
    desc: string;
    isActive: boolean;
    // khoi tao gia tri ban dau khi dung new
    constructor(id: number, code: string, name?: string, desc?: string, isActive?: boolean, year?: number, model?: string, sku?: string) {
        super()
        this.id = id;
        this.code = code;
        this.name = name;
        this.desc = desc;
        this.isActive = isActive;
        this.year = year;
        this.model = model;
        this.setSKU(sku);
    }
    
    setCode(code:string) {
        this.code = code
    }

    static setCount(count:number) {
        this.count = count
    }
};

