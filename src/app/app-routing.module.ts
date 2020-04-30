import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { AboutusComponent } from './product/aboutus/aboutus.component';
import { ContactusComponent } from './product/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo: 'login'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  //{path:'contactus',component:ContactusComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
