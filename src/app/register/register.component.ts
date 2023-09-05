import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm!:FormGroup;
msg = " "


  constructor(private service :UserService, private router:Router,private formBuilder:FormBuilder) { 
    this.registerForm=this.formBuilder.group({
    })
  }
  

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm()
{
    this.registerForm=new FormGroup(
  {
    name:new FormControl(),
    email:new FormControl(),
    pass :new FormControl(),
    birthday:new FormControl(),
    gender:new FormControl()
  }
)
}
onsumbit(){
  let mail=this.registerForm?.value.email
  if(!this.service.isExists(mail)){
    let name=this.registerForm?.value.name
    let pass=this.registerForm?.value.pass
    let birthday=this.registerForm?.value.birthday
    let Gender=this.registerForm?.value.gender
   // alert(name +","+pass +"," + Gender)
    this.service.adduser(name,mail,pass,birthday,Gender).subscribe((data)=>{
     
    })
    alert("new user inserted")
    this.service.refresh()
    this.router.navigateByUrl('profile')
  }
  else
    alert("user exists")
}
}
