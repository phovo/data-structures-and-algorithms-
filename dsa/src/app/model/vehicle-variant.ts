export class VehicleVariant {
    id: number;
    code: string;
    name: string;
    desc: string;
    isActive: boolean;
    // khoi tao gia tri ban dau khi dung new
    constructor(id: number, code: string, name?: string, desc?: string, isActive?: boolean) { 
        this.id = id;
        this.code = code;
        this.name = name;
        this.desc = desc;
        this.isActive = isActive;
    }
    //constructor(){}
}
