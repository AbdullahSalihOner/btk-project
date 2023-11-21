import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
 
  sayi1:number=15;
  sayi2:number=20;

  showresult:number=0;
 

  readResult(event:number){
    console.log(event);
    this.showresult=event;
  }

  
}