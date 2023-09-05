
import { Component, Input, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import{productservice} from '../product.service';
import{Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  obs = new Observable((observer) => {
    console.log("Observable starts")})

  meals:Product[]=[]
  _option : string = ""
  @Input()  
  set option(option: string) {
    this._option = option
    if(this.option == "Starters"){
      //this.meals= this.productservice.getAllproduct();
      this.productservice.getStartersproduct().subscribe((data)=>{
        this.meals=data;
      }
      )
    }
    else if(this.option== "Salads"){
      //this.meals = this.productservice.getSaladsproduct();
      this.productservice.getSaladsproduct().subscribe((data)=>{
        this.meals=data;
      })
    }
    else if(this.option== "Main"){
     // this.meals = this.productservice.getMainproduct();
     this.productservice.getMainproduct().subscribe((data)=>{
      this.meals=data;
    })
    }
    // else if(this.option== "Starters"){
    //   // this.meals = this.productservice.getMainproduct();
    //   this.productservice.getStartersproduct().subscribe((data)=>{
    //    this.meals=data;
    //  })
    //  }
    else{
      //this.meals= this.productservice.getStartersproduct();
      this.productservice.getAllproduct().subscribe((data)=>{
        this.meals=data;
      })
    }
  }
  get option(): string {
    return this._option 
  }

  constructor(private productservice:productservice,private cartservise:CartService) { }

  ngOnInit(): void {
    //this.meals = this.productservice.getAllproduct()
    console.log("ngOnInit")
    this.obs.subscribe(val =>{console.log(val)},)
  }

  add(product:Product){
    this.cartservise.addToCart(product);
  }
}
