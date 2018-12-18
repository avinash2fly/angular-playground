import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';
  myOnject ={
    gender:'male',
    age:33,
    location:'USA'
  };
  myArr=['him','hers','yours']
}
