import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../cartProduct';
import { Product } from '../product';
import { UserService } from '../user.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  baseURL: string = 'http://localhost:3000/';
  headers = { 'content-type': 'application/json' };
  cart !: Cart
  
  products=this.cartservisc.getProducts();
  constructor(private cartservisc:CartService,private userservice:UserService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.cart = this.cartservisc.cart
  }

  isloggedin(){
    return this.userservice.islogginIn()  
    } 

  add(product: Product){
this.cartservisc.addToCart(product)
this.cart = this.cartservisc.cart
  }
  sub(product: Product){
    this.cartservisc.removeFromCart(product)
    this.cart = this.cartservisc.cart
  }
  remove(product: Product){
    this.cartservisc.removeFromCart(product)
  }
clear(){
  this.cartservisc.clearCart()
  this.cart = this.cartservisc.cart
}

pay(){
  if(sessionStorage.getItem('user')){
    alert("done pay");
  this.cartservisc.pay().subscribe(()=>{
    //data=this.cartservisc.getProducts()
  });
  this.cart=this.cart;
  this.cartservisc.clearCart();
  }
   this.clear()
}

removept(product:Product){
  this.cartservisc.removept(product)
  this.cart = this.cartservisc.cart
}
}
