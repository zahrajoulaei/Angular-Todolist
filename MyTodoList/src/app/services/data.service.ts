import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  
  private goals =new BehaviorSubject<any>(['somegoal','anothergoal!!']);
  goal = this.goals.asObservable();
  

  constructor() {
    console.log('dataservice connect shod!!');
  }
  
  changeGoal(goal){
    this.goals.next(goal);
  }

}
