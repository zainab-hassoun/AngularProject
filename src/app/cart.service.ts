import { Injectable } from '@angular/core';
import { Cart } from './cartProduct';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Cart = new Cart()
  baseURL:string="http://localhost:3000/"
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) { }

  addToCart(product : Product){
    this.cart.addproduct(product)
  }

  getProducts(){
   return this.cart.getproduct()
  }

  removeFromCart(product:Product){
    this.cart.removeproduct(product)
  }
  clearCart(){
    this.cart = new Cart()
  }
  removept(product:Product){
    this.cart.removept(product)
  }
  updateUser(user : User){ 
    this.cart.updateUser(user)
  } 
  pay():Observable<any>{
    this.cart.paid = true
    let body = JSON.stringify(this.cart);
    console.log(body);
    return this.http.post(this.baseURL+'carts/',body,{headers:this.headers});
  }
}
