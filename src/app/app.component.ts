import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService:DataService){

  }

  SomeProperty:string='';

  ngOnInit(){
    console.log(this.dataService.cars);
    this.SomeProperty=this.dataService.myData();
  }


  title = 'angular-playground';
  myOnject ={
    gender:'male',
    age:33,
    location:'USA'
  };
  myArr=['him','hers','yours'];
  angualarLogo ='https://angular.io/assets/images/logos/angular/shield-large.svg'
  buttonStatus =false;
titleClass = 'red-title';
  myEvent(event){
    console.log(event);
  };

  titleClasses={
    'red-title':false,
    'large-title':true
  };
  titleStyle=true;
  titleStyles={
    'color':'pink',
    'font-size':'4em'
  }


}
