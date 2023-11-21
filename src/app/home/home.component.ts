import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() header: string = "0";
  @Output() buttonEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleUp() {
    this.buttonEvent.emit("Butona Tıklandı");
    //this.header = (parseInt(this.header) + 1).toString();
    //this.header = this.header.padStart(1,"0");
    this.header = "0";
  }

  increase() {
    this.header = (parseInt(this.header) + 1).toString();
    this.header = this.header.padStart(1,"0");
  }

  decrease() {
    this.header = (parseInt(this.header) - 1).toString();
    this.header = this.header.padStart(1,"0");
  } 

}
