import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 

  degisken1: number = 5;
  degisken2: number = 7;
  degisken3: number;

  constructor(){
    this.degisken3 = this.topla();
    console.log(this.degisken3);
  }

  ngOnInit(){
    console.log("Started")
  }

  getTotal(number1:number, number2:number) : number{
    let total:number = number1 + number2;
    return total;
    
  }

  topla():number{
    let toplam:number;
    toplam = this.degisken1 + this.degisken2;
    return toplam;
  }
}
