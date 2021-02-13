import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersArrayService } from '../users-array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private userService: UsersArrayService)
{
}
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
addNew()
{
 this.user={id:this.nid, username:this.nusername,status:this.nstatus,role:this.nrole,email:this.nemail,term:this.nterm,userImage:this.nuserImage};
  this.userService.addNewUser(this.user);
  console.log(this.user.id);
}



}
