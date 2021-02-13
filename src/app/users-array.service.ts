import { Injectable } from '@angular/core';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})

export class UsersArrayService {
  arrayUsers: User[] = [];
  constructor() { }
  getUsers()
  {
    return this.arrayUsers;
  }
  addNewUser(user:User)
  {
    this.arrayUsers.push(user);
  }
}
