import { Component, Input, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import{productservice} from '../product.service';
import{Product} from '../product';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  product:Product[]=[]

  constructor(private productservice:productservice,private cartservise:CartService) {
  }

  ngOnInit(): void {
    this.productservice.getproduct().subscribe((data)=>{
      this.product = data;
    });
  }
  add(product:Product){
    this.cartservise.addToCart(product);
  }
}
  
 
