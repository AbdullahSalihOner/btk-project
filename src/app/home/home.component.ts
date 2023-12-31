import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  url = 'https://dummyjson.com/users/add';

  users: UserModel = {};
  user: SingleUserModel = {};
  constructor(public http:HttpClient) { }
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: UserModel | any)=>{
   // this.users=data;
    //console.log(data);
    })
    let body = {
      firstName: 'Muhammad',
      lastName: 'Ovi',
      age: 250,
      /* other user data */
    };
    this.http.post(this.url, body).subscribe((data)=>{
      this.user=data;
      console.log(data);
    } )    
  }
  
  
  /* @Input() number1 : number = 0;
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
  } */ 

}

export interface UserModel{
  limit?:number;
  skip?:number;
  total?:number;
  users?:any[];
}

export interface SingleUserModel{
  id?:number;
  firstName?:string;
  lastName?:string;
  maidenName?:string; 
  age?:number;
}