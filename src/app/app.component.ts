import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  name:string = "Rupesh Chaudhari";

  constructor(){
    this.name = "Rupesh Ashok Chaudhari"
  }
}
