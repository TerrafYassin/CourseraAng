import { Injectable } from '@angular/core';
import {Leader} from "../shared/leader";
import {leaders} from "../shared/leaders";
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }


  getLeaders():Leader[]{
    return leaders;
  }
  
  getFeaturedLeader(): Leader {
    return leaders.filter((Leader) => Leader.featured)[0];
  }
  getLeader( id: string) : Leader{ return leaders.filter((leader) => (leader.id===id)) [0]; } 
}
