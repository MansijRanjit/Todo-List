import { ID_LENGTH } from "./constants";
import { getRandomString } from "./utils";

export interface ITask{
  id:string;
  value:string;
  completed:boolean;
}

export class Task implements ITask{
  id:string;
  value:string;
  completed:boolean;

  constructor(value:string,completed=false){
    this.id=getRandomString(ID_LENGTH);
    this.value=value;
    this.completed=completed;
  }
}