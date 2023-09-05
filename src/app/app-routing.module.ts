import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'home',component:HomeComponent},
{path:'catalog',component:CatalogComponent},
{path:'about',component:AboutUsComponent},
{path:'cart',component:CartComponent},
{path:'profile',component:ProfileComponent,
  children:[
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'userdetails/:mail',component:UserDetailsComponent}
  ]
},
{path:'navbar',component:NavbarComponent},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
