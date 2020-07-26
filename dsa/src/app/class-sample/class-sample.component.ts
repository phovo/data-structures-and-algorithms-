import { Component, OnInit } from '@angular/core';
import { VehicleVariant } from '../model/vehicle-variant'

@Component({
  selector: 'app-class-sample',
  templateUrl: './class-sample.component.html',
  styleUrls: ['./class-sample.component.css']
})
export class ClassSampleComponent implements OnInit {

  vehiclevariant: VehicleVariant = new VehicleVariant(6, "codexxcc") //Khai bao va  KHOI TAO
  vehiclevariant1: VehicleVariant = new VehicleVariant(7, "bbb") //Khai bao va  KHOI TAO

  constructor() {
  }

  ngOnInit(): void {
    this.vehiclevariant.name = "Meo";
    this.vehiclevariant.isActive = false;// oi tuong/bien cua class
    console.log(this.vehiclevariant)
    console.log(1111111111111)
    console.log(this.vehiclevariant1)
    console.log(2222222222)
    console.log(VehicleVariant.count)
    console.log(3333)
    console.log(VehicleVariant.setCount(1)) // class
  }

}
