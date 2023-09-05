import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = 'http://localhost:3000/';
headers = { 'content-type': 'application/json' };
  users : User[] = [
    // new User("heba","heba@hotmail.com","123","2442001","female"),
    // new User("alex","alex@hotmail.com","12345","2152001","male")
  ]
  islogin2:boolean=false;
  constructor(private http: HttpClient,private router :Router) { 
    this.refresh()
  }
  
  getusers():Observable<any>{
    return this.http.get(this.baseURL + 'users');
  }
  refresh(){
    this.getusers().subscribe((data)=>{
      this.users=data;
    });
  }

  isExists(mail:string){
    for(let User of this.users){
      if(mail== User.email)
        return true
    }
    return false
  } 
  login(mail:string,pass:string){
for(let user of this.users)
if(user.email==mail && user.password == pass){
  sessionStorage.setItem('user',mail);
  if(user.Gender=='male')
  sessionStorage.setItem('image','https://th.bing.com/th/id/OIP.LftRMxkISZ37h5xsxfDCWQHaHa?pid=ImgDet&rs=1');
  else
  sessionStorage.setItem('image','https://th.bing.com/th/id/OIP.GIX5K_H6IcDTpUBcApSiEQHaHa?pid=ImgDet&w=201&h=201&c=7&dpr=1.3');
  return true
}
return false
  }
  logout(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('img')
    this.islogin2=false;
    this.router.navigate(['/home']);
  }
 

  adduser(name:string , mail:string , pass:string ,birthday:string,Gender:string ):Observable<any>{
    let user:User = new User (name,mail,pass,birthday,Gender)
   let body = JSON.stringify(user)
   return this.http.post(this.baseURL+"users",body,{headers:this.headers});
    
  }
  islogginIn(){
    if(sessionStorage.getItem('user'))
      return true;
    return false
  }
  getUser(mail:string){
    for(let user of this.users){
      if(mail== user.email)
        return user
    }
    return null
  }
}
