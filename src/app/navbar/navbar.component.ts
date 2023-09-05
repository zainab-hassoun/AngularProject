import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mail :string = ""
  image: string=""
  authenticated: any;
  islogin2:boolean=false;
  gender:string=""
  constructor(private service:UserService,private router:Router) { 
    
  }
 
  ngOnInit(): void {
  this.router.events.subscribe((val:any)=>{
    if(val.url && sessionStorage.getItem('user'))
      this.islogin2 = true;
      let mail = sessionStorage.getItem('user')
      if(mail != null){
        let user = this.service.getUser(mail)
        if(user != null){
          if(user.Gender == "male"){
            this.gender="male"
            this.image = ""
          }
          else if(user.Gender == "female"){
          this.gender="female"
          this.image = ""
          
          }
        }
      }
    })    
  }
  onLogout(){
    this.gender=""
    this.islogin2 = false;
    this.service.logout();
    
  }
  onclick(){
    this.router.navigate(['/profile/userdetails']);
   // this.service.click();
    
  }
}
