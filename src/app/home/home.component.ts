import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersArrayService } from '../users-array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  susers=this.userService.getUsers();
  term:any;
  nid: any;
  nusername:any;
  nstatus:any;
  nrole:any;
  nemail:any;
  nterm:any;
  nuserImage:any;
  user:User | undefined;
  roles = ['User', 'Administrator'];
  statuses = ['Active', 'Locked', 'Disabled'];

  constructor(private userService: UsersArrayService){}
  addNew()
  {
    this.user={id:this.nid, username:this.nusername,status:this.nstatus,role:this.nrole,email:this.nemail,term:this.nterm,userImage:this.nuserImage};
    this.userService.addNewUser(this.user);
    console.log(this.user.id);
  }
}
