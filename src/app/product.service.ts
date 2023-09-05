import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import{Product} from "./product";

@Injectable({
    providedIn:'root'
}
)

export class productservice{
  baseURL: string = 'http://localhost:3000/';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient){}

    getproduct() : Observable<any>{
      
      /*  let products :Product   [] = [
            new Product('first choice','pasta',80,"https://2.bp.blogspot.com/-3dfDFnW6CK8/WN_drOxyt3I/AAAAAAABKUA/Pggh0TuABgQeeCu29CZNJuPNcRH-34ZmgCLcB/s1600/DSC08233square.jpg"),
            new Product('second choice',"salmon",100,"https://revistavive.com/wp-content/uploads/2020/10/ALIMENTACION-2.png"),
            new Product('third choice','chicken & rice',120,"https://th.bing.com/th/id/R.74ed5ee684a2fd754fcb4d372ec32bc1?rik=1MUu%2fRMbhGwzbA&riu=http%3a%2f%2fassets.marthastewart.com%2fstyles%2fwmax-1500%2fd25%2fmsledf_0905_chixbrownrice%2fmsledf_0905_chixbrownrice_sq.jpg%3fitok%3dC_vpGZ2v&ehk=ThHpbd7tzz7xzB7w4P12cI6Rf6XPXDYTOgQXYnEs7KE%3d&risl=&pid=ImgRaw&r=0"),
            new Product("forth choice","Turkey soup",70,"https://www.tasteofhome.com/wp-content/uploads/2018/01/exps3791_TGCB163937D03_09_1b-1.jpg"),
            new Product("fifth choice","Mashrom Spaghetti",130,"https://www.theroastedroot.net/wp-content/uploads/2016/12/three_cheese_mushroom_bolognese_spaghetti_squash_casserole_1-720x720.jpg")];      
        return products;*/
        return this.http.get(this.baseURL + 'firstproducts');
      } 

      getAllproduct() : Observable<any>{
      //   let products :Product   [] = [
      //     new Product('Greek Kale Salad','',80,"https://gimmedelicious.com/wp-content/uploads/2021/02/Greek-Kale-Salad-SQ.jpg"),
      //     new Product('Salad with cheese','',80,"https://hemsleyandhemsley.com/assets/2018/08/IMG_5848.jpg"),
          
      //   new Product('Broccli Salad','',80,"https://farm8.staticflickr.com/7028/13255151335_8863c62c4c_c.jpg"),
      //   new Product('Corn Salad  ','  ',80,"https://th.bing.com/th/id/OIP.EvR32h68J--1aRIOS0rkaQHaJQ?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
      //   new Product('Fruit Salad ','  ',80,"https://th.bing.com/th/id/OIP.S82KR_Nyb3tfMY16j1lHLwHaJ3?w=203&h=271&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
      //   new Product('pasta salad ','  ',70,"https://img.mensxp.com/media/content/2022/Nov/_a-bowl-of-Italian-pasta-salad_638061e4cf7d6.jpeg"),
      //   new Product('Fresh salad ','  ',70, "https://www.theecoffeehouse.com/uploads/1/2/7/3/127318436/s797718911579512593_c2_i1_w640.jpeg"),
      //   new Product('Salmon',"  ",100,"https://revistavive.com/wp-content/uploads/2020/10/ALIMENTACION-2.png"),
      //   new Product('Seafood',"  ",100,"https://i.pinimg.com/736x/25/f9/d4/25f9d48c4000984be7c492b421e85111.jpg"),
      //   new Product("Mashrom Spaghetti"," ",130,"https://www.theroastedroot.net/wp-content/uploads/2016/12/three_cheese_mushroom_bolognese_spaghetti_squash_casserole_1-720x720.jpg"),
      //   new Product('Butter Chicken',"  ",100,"https://th.bing.com/th/id/OIP.pgODV-r-_hMuokxzBcU53wHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
      //   new Product('Steak and chips'," ",100,"https://properfoodie.com/wp-content/uploads/2021/04/Steak-and-chips-8.jpg"),
      //   new Product('Peri chicken breast'," ",100,"https://www.frugalmomeh.com/wp-content/uploads/2014/01/SQUARE-1.jpg"),
      //   new Product('Chicken & rice',' ',120,"https://th.bing.com/th/id/R.74ed5ee684a2fd754fcb4d372ec32bc1?rik=1MUu%2fRMbhGwzbA&riu=http%3a%2f%2fassets.marthastewart.com%2fstyles%2fwmax-1500%2fd25%2fmsledf_0905_chixbrownrice%2fmsledf_0905_chixbrownrice_sq.jpg%3fitok%3dC_vpGZ2v&ehk=ThHpbd7tzz7xzB7w4P12cI6Rf6XPXDYTOgQXYnEs7KE%3d&risl=&pid=ImgRaw&r=0"),
      //   new Product("Turkey soup"," ",70,"https://www.tasteofhome.com/wp-content/uploads/2018/01/exps3791_TGCB163937D03_09_1b-1.jpg"),
      // new Product('Pasta',' ',80,"https://2.bp.blogspot.com/-3dfDFnW6CK8/WN_drOxyt3I/AAAAAAABKUA/Pggh0TuABgQeeCu29CZNJuPNcRH-34ZmgCLcB/s1600/DSC08233square.jpg"),
      // new Product('Bottato','  ',80,"https://i.pinimg.com/originals/b2/a0/76/b2a076464455793fa8855dd8630c8db6.jpg"),
      // new Product('Cheese bread ',' ',80,"https://lh3.googleusercontent.com/R1Xoy4hK9btAI_y9dbX3v6bmC1vj14tXrL5dAwYaUBWrogisE_VOFx1oPmoEDtPByScgbxpORRW0rNo-0rtOT5HTztSeiTXvfe3CDnaH=w1200-l75"),
      // new Product('Mozzarella fingers','  ',80,"https://th.bing.com/th/id/OIP.Ucl3XIxeq0oJzKwMoIjbLwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
      // new Product('Wings with chile',' ',80,"https://th.bing.com/th/id/OIP.uI2qFXCsdLptc8fLvCoBkAHaJ3?w=149&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
      // new Product('Cooked vegetables','  ',80,"https://th.bing.com/th/id/OIP.6qpl-R3Wdf0dYZd495_S-AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7") 
      //   ];
        return this.http.get(this.baseURL + 'products');
        
      }

getSaladsproduct(): Observable<any>{
    // let products : Product[] = [
    //     new Product('Greek Kale Salad','',80,"https://gimmedelicious.com/wp-content/uploads/2021/02/Greek-Kale-Salad-SQ.jpg"),
    //     new Product('Broccli Salad','',80,"https://farm8.staticflickr.com/7028/13255151335_8863c62c4c_c.jpg"),
    //     new Product('Corn Salad  ','  ',80,"https://th.bing.com/th/id/OIP.EvR32h68J--1aRIOS0rkaQHaJQ?w=203&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
    //     new Product('pasta salad ','  ',70,"https://img.mensxp.com/media/content/2022/Nov/_a-bowl-of-Italian-pasta-salad_638061e4cf7d6.jpeg"),
    //     new Product('Fresh salad ','  ',70, "https://www.theecoffeehouse.com/uploads/1/2/7/3/127318436/s797718911579512593_c2_i1_w640.jpeg")];
    //     return products;
    return this.http.get(this.baseURL + 'saladsproducts');
    

  }
  
  getMainproduct(): Observable<any>{
    // let products : Product[] = [
    //     new Product('Salmon',"  ",100,"https://revistavive.com/wp-content/uploads/2020/10/ALIMENTACION-2.png"),
    //     new Product("Mashrom Spaghetti"," ",130,"https://www.theroastedroot.net/wp-content/uploads/2016/12/three_cheese_mushroom_bolognese_spaghetti_squash_casserole_1-720x720.jpg"),
    //     new Product('Steak and chips'," ",100,"https://properfoodie.com/wp-content/uploads/2021/04/Steak-and-chips-8.jpg"),
    //     new Product('Peri chicken breast'," ",100,"https://www.frugalmomeh.com/wp-content/uploads/2014/01/SQUARE-1.jpg"),
    //     new Product('Chicken & rice',' ',120,"https://th.bing.com/th/id/R.74ed5ee684a2fd754fcb4d372ec32bc1?rik=1MUu%2fRMbhGwzbA&riu=http%3a%2f%2fassets.marthastewart.com%2fstyles%2fwmax-1500%2fd25%2fmsledf_0905_chixbrownrice%2fmsledf_0905_chixbrownrice_sq.jpg%3fitok%3dC_vpGZ2v&ehk=ThHpbd7tzz7xzB7w4P12cI6Rf6XPXDYTOgQXYnEs7KE%3d&risl=&pid=ImgRaw&r=0")];
    // return products;
    return this.http.get(this.baseURL + 'mainproducts');
  }
  getStartersproduct(): Observable<any>{
    // let products : Product[] = [
        
    //   new Product("Turkey soup"," ",70,"https://www.tasteofhome.com/wp-content/uploads/2018/01/exps3791_TGCB163937D03_09_1b-1.jpg"),
    //   new Product('Pottato','  ',80,"https://i.pinimg.com/originals/b2/a0/76/b2a076464455793fa8855dd8630c8db6.jpg"),
    //   new Product('Cheese bread ',' ',80,"https://lh3.googleusercontent.com/R1Xoy4hK9btAI_y9dbX3v6bmC1vj14tXrL5dAwYaUBWrogisE_VOFx1oPmoEDtPByScgbxpORRW0rNo-0rtOT5HTztSeiTXvfe3CDnaH=w1200-l75"),
    //   new Product('Wings with chile',' ',80,"https://th.bing.com/th/id/OIP.uI2qFXCsdLptc8fLvCoBkAHaJ3?w=149&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"),
    //   new Product('Cooked vegetables','  ',80,"https://th.bing.com/th/id/OIP.6qpl-R3Wdf0dYZd495_S-AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7")
    // ];
    // return products;
    return this.http.get(this.baseURL + 'startersproducts');
  }

}


