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

  constructor() { }

  ngOnInit(): void {
    this.numArr = [7, 3, 9, 4, 1];
    this.vehicles = [new VehicleVariant(5, "ford"), new VehicleVariant(4, "nissan"), new VehicleVariant(8, "toyota"), new VehicleVariant(6, "honda")]
    this.onSort();
    
  }

  


  // 7, 3, 9, 4, 1
  // 1,3, 4, 7, 9


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
