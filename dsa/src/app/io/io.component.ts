import { Component, OnInit } from '@angular/core';
import { IOInterface } from '../interface/iointerface'

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})
export class IOComponent implements OnInit, IOInterface {

  constructor() { }
  
  onScan(source?: string): string {
    throw new Error("Method not implemented.");
  }

  onRead(path: string): void {
  }

  ngOnInit(): void {
  }

}
