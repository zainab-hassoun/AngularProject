import { Component, OnInit } from '@angular/core';
import { productservice } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  _option:string=" "
  constructor(productservice:productservice) { }

  ngOnInit(): void {
    
   
  }
  setOption(option: string){
    this._option=option
  }

}
