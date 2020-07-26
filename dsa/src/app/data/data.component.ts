import { Component, OnInit } from '@angular/core';
import { VehicleVariant } from '../model/vehicle-variant';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  vehicles: VehicleVariant[]=[];
  numArr: Number[]

  constructor() { }

  ngOnInit(): void {
    this.numArr = [7, 3, 9, 4, 1];
    this.vehicles = [new VehicleVariant(5, "ford"), new VehicleVariant(4, "nissan"), new VehicleVariant(8, "toyota"), new VehicleVariant(6, "honda")]
  }

}
