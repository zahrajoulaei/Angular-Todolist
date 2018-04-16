import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations:[
    trigger('goals',[
      transition('* => *',[
        query(':enter', style({opacity:0}),{optional:true}),
        
        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:0 , transform:'translateY(-75%)',offset:0}),
            style({opacity:0.5 , transform:'translateY(35%)',offset:.3}),
            style({opacity:1 , transform:'translateY(0%)',offset:1}),
          ]))]),{optional:true}),
        
        query(':leave', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:1 , transform:'translateY(0%)',offset:0}),
            style({opacity:0.5 , transform:'translateY(35%)',offset:.3}),
            style({opacity:0 , transform:'translateY(-75%)',offset:1}),
          ]))]),{optional:true})
        
      ])
    ])
  ]
  
  
  
  
})
export class UserComponent implements OnInit {
  name:string;
  goals=[];
  itemCount: number;
  btnText:string="Add item";
  goalText:string="My first goal";
  
  constructor(private _data: DataService) {
  
  
  }
  
  
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals =res);
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  
  
  addItem(){
    this.goals.unshift(this.goalText);
    this.goalText= '';
    this.itemCount= this.goals.length;
    this._data.changeGoal(this.goals);
   
  }
  
  deletegoal(i){
        this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }
  
 

}

interface address {
  street:string,
  city:string,
  state:string,
  unit:number
}
