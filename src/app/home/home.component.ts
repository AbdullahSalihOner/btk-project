import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() number1 : number = 0;
  @Input() number2 : number = 0;
  @Input() resultNumber : number = 0;
  @Output() result  = new EventEmitter<number>();
  

  constructor() {}

  ngOnInit(): void {
    this.result.emit(this.number1 + this.number2);//Doğru kısım
  }

  add() {
    this.result.emit(this.number1 + this.number2);
    this.resultNumber = this.number1 + this.number2;
    console.log(this.number1 + this.number2);
  }

  subtract() {
    this.result.emit(this.number1 - this.number2);
    this.resultNumber = this.number1 - this.number2;
    console.log(this.number1 - this.number2);
  }

  multiply() {
    this.result.emit(this.number1 * this.number2);
    this.resultNumber = this.number1 * this.number2;
    console.log(this.number1 * this.number2);
  }

  divide() {
    this.result.emit(this.number1 / this.number2);
    this.resultNumber = this.number1 / this.number2;
    console.log(this.number1 / this.number2);
  }

 

}
