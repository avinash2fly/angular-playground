import { Component } from '@angular/core';
import {DataService} from './data.service';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myAwesomeAnimation',[
      state('small',style({
        transform:'scale(1)',
      })),
      state('large',style({
        transform:'scale(1.2)',
      })),
      transition('small <=> large',animate('300ms ease-in',
    keyframes([
      style({opacity:0,transform:'translateY(-75%)',offset:0}),
      style({opacity:1,transform:'translateY(35px)',offset:.5}),
      style({opacity:1,transform:'translateY(0)',offset:1}),
  ]))),
    ]),
  ]
})
export class AppComponent {

  state: string ='small'
  constructor(private dataService:DataService){

  }

  animateMe(){
    this.state=(this.state === 'small'?'large':'small');
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
