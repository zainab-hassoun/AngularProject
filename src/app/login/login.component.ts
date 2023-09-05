import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { User } from '../model/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  baseURL: string = 'http://localhost:3000/';
  headers = { 'content-type': 'application/json' };
  value="something"
  users:User[]=[]
  loginform!:FormGroup; 
  mail = ""
  pass=""

  constructor(private formBuilder:FormBuilder,private service:UserService, private router:Router
    ,private actRoute: ActivatedRoute,private cart:CartService) { }
  refresh(){
    this.service.getusers().subscribe((data)=>{
      console.log(data);
      this.users=data;
    });
  }
  ngOnInit(): void {
    this.refresh()
    this.creatloginform();
  }
  creatloginform(){
    this.loginform= this.formBuilder.group({
      email:[''],
      password:[''],
    });
  }
  onSubmit(){
    this.mail = this.loginform.value.email
    this.pass=this.loginform.value.password  
    for(let user of this.users){
      if(user.email==this.mail && user.password==this.pass){
        sessionStorage.setItem('user',this.mail);	
          this.cart.updateUser(user);
          this.router.navigate(['/profile/userdetails',this.mail]);
          return
      }
    }
    alert("USER NAME OR PASSWORD INCORRECT" )
  }
}
