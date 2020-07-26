import { Component, OnInit } from '@angular/core';
import { VehicleVariant } from '../model/vehicle-variant'

@Component({
  selector: 'app-class-sample',
  templateUrl: './class-sample.component.html',
  styleUrls: ['./class-sample.component.css']
})
export class ClassSampleComponent implements OnInit {

  vehiclevariant: VehicleVariant = new VehicleVariant(6, "codexxcc") //Khai bao va  KHOI TAO
  vh:VehicleVariant = new VehicleVariant(1, "xxx", "cccc", "bbbbbbbb", false);

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.vehiclevariant)
  }

}
