import { Injectable } from '@angular/core';
import { HEROS } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];


  // tslint:disable-next-line:typedef
  add(message: string){
    this.messages.push(message);
  }

  // tslint:disable-next-line:typedef
  clear(){
    this.messages = [] ;
  }


}
