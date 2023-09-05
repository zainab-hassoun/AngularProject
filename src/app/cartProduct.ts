import { User } from "./model/user";
import { Product } from "./product";

export class CartProduct {
    product: Product;
    quantity: number;
    static gen : number = 1
       id : number
    constructor(product: Product) {
      this.id = Cart.gen++
      this.product = product;
      this.quantity = 1;
    }
  }
  export class Cart {
    static gen : number = 1
    id!: number;
    user !: User;
    products: CartProduct[] =[];
    paid: boolean = false;
    total: number = 0;
    userservice: any;
    
  
    getproduct(){
     return this.products;
    }
    
    addproduct( product: Product){
      let found = false
      this.total+=product.price
      for(let item of this.products){
        if(item.product === product){
          item.quantity++
          found = true
        }
      }
      if(!found)
        this.products.push(new CartProduct(product))
    }
    removeproduct(product:Product){
      let found = false
      let temp : CartProduct[] = []
      this.total -= product.price
      /*for(let item of this.products){
        if(item.product == product){
          found=true
         // this.total -= product.price
          item.quantity--
          if(item.quantity==0){
          //product.pop(
          temp.pop();
          }*/
// this.products = temp
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product === product) {
                this.products[i].quantity--;
                if (this.products[i].quantity == 0) {
                    this.products.splice(i, 1);
                }
                break;
            }
        }
        }
   removept(product:Product){
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product === product){
        this.total -= (product.price *this.products[i].quantity)
        this.products.splice(i, 1);
        break;
      }
    }
  }
      isUserloggedin(){
        return this.userservice.islogginIn()  
        } 

        clear(cart:Cart){
          this.total=0
         this.products=[] ;
        }
        updateUser(user:User){
         this.user=user
        }
        
      }
     
    
   
    