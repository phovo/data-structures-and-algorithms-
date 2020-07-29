import { Component, OnInit } from '@angular/core';
import { VehicleVariant } from '../model/vehicle-variant';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  vehicles: VehicleVariant[] = [];
  numArr: Number[]
  indexValue:number
  value:number;
  code:string
  idCode:number

  constructor() { }

  ngOnInit(): void {
    this.numArr = [7, 3, 9, 4, 1, 9];
    this.vehicles = [new VehicleVariant(5, "ford"), new VehicleVariant(4, "nissan"), new VehicleVariant(7, "nissan"), new VehicleVariant(8, "toyota"), new VehicleVariant(6, "honda")]
    //this.onSort();
    //this.onSortVehicles();
    this.value = 9;
    this.onSearch();

    this.code = "nissan"
    this.onSearchVehicles(this.code)    
  }

  onSearchVehicles(input: string) {
    let index = 0;
    while(index < this.vehicles.length) {
      if (this.vehicles[index].code === input ) {
        this.idCode = this.vehicles[index].id
      }

      index++;
    }
  }

  onSearch() {
    for (let index = 0; index < this.numArr.length; index++) {
      if (this.numArr[index] === this.value) {
        this.indexValue = index;
        break;
      }
    }
  }

  onSortVehicles() {
    for (let out = 0; out < this.vehicles.length; out++) {
      for (let ind = out; ind < this.vehicles.length; ind++) {
        if (this.vehicles[out].code > this.vehicles[ind].code) {
           let elm = this.vehicles[ind];
           this.vehicles[ind] = this.vehicles[out];
           this.vehicles[out] = elm;

        }
      }
    }
  }

  onSort() {
    let out = 0;
    while (out < this.numArr.length) {
      let index = out;
      while (index < this.numArr.length) {
        if (this.numArr[out] < this.numArr[index]) {
          let temp = this.numArr[index];//tem = A
          this.numArr[index] = this.numArr[out] // A = B
          this.numArr[out] = temp;// B = Temp
        }
        index++
      }
      out++
    }
    //   for (let out = 0; out < this.numArr.length; out++) {
    //     for (let index = out; index < this.numArr.length; index++) {
    //       if (this.numArr[out] > this.numArr[index]) {
    //         let temp = this.numArr[index];//tem = A
    //         this.numArr[index] = this.numArr[out] // A = B
    //         this.numArr[out] = temp;// B = Temp
    //       }
    //     }
    //   }
  }
}
