import { Injectable } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { User } from '../model/user.model';
import { USERS } from './user.mock';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = USERS;

  constructor() { }

  isValidUser(username: string, password: string): boolean{
    for (let user of this.users){
      if (username == user.userName && password == user.password){return true}
    }
    return false;
  }

}

