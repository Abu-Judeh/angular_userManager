import { Component, OnInit } from '@angular/core';
import { UsersArrayService } from '../users-array.service';
import {User} from '../user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  userarray: any;
 constructor(private userService: UsersArrayService){}
 ngOnInit()
 {
    this.userarray=this.userService.getUsers();
 }
  


}
