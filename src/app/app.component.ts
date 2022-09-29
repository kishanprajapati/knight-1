import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boxes: number[] = [];
  times: number = 8;
  tr:number = 0;
  td:number = 0;
  totalPossibilities: any[] = [];

  ngOnInit(){
    for(let i = 1; i<= this.times; i++){
      this.boxes.push(i);
    }
  }

  selected(x:number,y:number){
    this.tr = x;
    this.td = y;
    this.totalPossibilities = [];
    this.tr - 2 > 0 && this.tr - 2 < this.times+1 && this.td - 1 > 0 && this.td - 1 < this.times+1 ? this.totalPossibilities.push([this.tr - 2,this.td - 1]) : '';
    this.tr - 2 > 0 && this.tr - 2 < this.times+1 && this.td + 1 > 0 && this.td + 1 < this.times+1 ? this.totalPossibilities.push([this.tr - 2,this.td + 1]) : '';
    this.tr + 2 > 0 && this.tr + 2 < this.times+1 && this.td - 1 > 0 && this.td - 1 < this.times+1 ? this.totalPossibilities.push([this.tr + 2,this.td - 1]) : '';
    this.tr + 2 > 0 && this.tr + 2 < this.times+1 && this.td + 1 > 0 && this.td + 1 < this.times+1 ? this.totalPossibilities.push([this.tr + 2,this.td + 1]) : '';
    this.tr - 1 > 0 && this.tr - 1 < this.times+1 && this.td - 2 > 0 && this.td - 2 < this.times+1 ? this.totalPossibilities.push([this.tr - 1,this.td - 2]) : '';
    this.tr - 1 > 0 && this.tr - 1 < this.times+1 && this.td + 2 > 0 && this.td + 2 < this.times+1 ? this.totalPossibilities.push([this.tr - 1,this.td + 2]) : '';
    this.tr + 1 > 0 && this.tr + 1 < this.times+1 && this.td - 2 > 0 && this.td - 2 < this.times+1 ? this.totalPossibilities.push([this.tr + 1,this.td - 2]) : '';
    this.tr + 1 > 0 && this.tr + 1 < this.times+1 && this.td + 2 > 0 && this.td + 2 < this.times+1 ? this.totalPossibilities.push([this.tr + 1,this.td + 2]) : '';
  }

  possibilityCheck(x:number, y:number): boolean {
    let a = JSON.stringify(this.totalPossibilities);
    let b = JSON.stringify([x,y]);
    let isAvailable = -1;
    isAvailable = a.indexOf(b);
    return isAvailable !== -1 ? true : false;
  }
}
