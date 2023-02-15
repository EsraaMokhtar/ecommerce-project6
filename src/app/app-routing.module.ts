import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
// import { AddProductComponent } from './Components/Admin/AddProduct/AddProduct.component';
import { AddProductComponent } from './Components/AddProduct/AddProduct.component';

const routes: Routes = [

  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component: HomeComponent},
    {path:'Products',component: ProductsComponent},
    {path:'Products/:id',component: ProductDetailsComponent},
    {path:'Order',component: OrderParentComponent},
    {path:'addProduct',component: AddProductComponent},
  ]},
  {path:'**',component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
