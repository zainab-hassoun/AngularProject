import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  mail :string = ""
  name :string=""
  gender : string = ""
  birthday:string=""
  users: User[] = []
  constructor(private service:UserService, private actRoute:ActivatedRoute) { }

  refresh(){
    this.service.getusers().subscribe((data)=>{
      console.log(data);
      this.users=data;
      this.getUser()
    });
  }

  getUser(){
    for(let user of this.users){
      if(this.mail == user.email){
        this.name = user.name
        this.gender = user.Gender
        this.birthday = user.birthday
      }
    }
  }
  
  ngOnInit(): void {
    this.mail = this.actRoute.snapshot.params["mail"];
    this.refresh()  
  }
}
