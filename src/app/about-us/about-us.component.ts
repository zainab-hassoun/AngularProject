import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  img1 = 'https://th.bing.com/th/id/OIP.JBZz9nEux4jBqjceiLycqwHaIK?pid=ImgDet&w=201&h=221&c=7&dpr=1.3'
  student1 = 'Heba ID:211508643'
  img2 = 'https://th.bing.com/th/id/OIP.46MkLf1_Qgb_dmoKGKrx-gHaIK?pid=ImgDet&w=201&h=222&c=7&dpr=1.3'
  student2 = 'Zainab ID:212790745'
  mail1='Hebaabu2001@hotmail.com'
  mail2='zainabhassoun123@gmail.com'
title1='Student'
title2='Student'
inf1='In Ort Braude'
inf2="In Ort Braude"

  constructor() { }

  ngOnInit(): void {
  }
  islight=true;
  Text="light";
  Text1="dark";
    
  color():void{
    //var x;
    if(this.islight){
       this.islight=!this.islight;
       this.Text="dark";
    }
    else{
      this.islight=!this.islight;
      this.Text="light";
    }
    
  
  }
}
