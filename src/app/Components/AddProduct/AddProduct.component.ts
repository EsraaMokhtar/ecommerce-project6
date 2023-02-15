import { Component, Input , OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { Iproduct } from 'src/app/Models/iproduct';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-products',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.scss']
})
export class AddProductComponent implements OnInit{

  @Input() receivedID:number=0;
  // newPrd:Iproduct = {} as Iproduct;
  newPrd:Iproduct = {} as Iproduct;
  catList:Icategory[]=[];
  constructor(private prdService:ProductService,private router:Router ,private prdAPIService:ProductsApiService ) {
    this.newPrd=   {
      id: 10,
      name: "testt",
      price: 41000,
      quantity : 1,
      catID: 4,
      imgURL: "assets/fresh.jpg"
    }
  }


  ngOnInit(): void {
    this.prdAPIService.getAllCategory().subscribe(data1=>{
   this.catList=data1;
  })
  }

  addProduct(pname: string , pprice: string , pquantity : string, pcatId: string){
    this.prdService.add(pname ,pprice ,pquantity , pcatId) ;
    this.router.navigateByUrl('/Products')
  }

addOneProduct(){
  this.prdAPIService.addProduct(this.newPrd).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl('/Products')
    
  })

}

updateOneProduct(id:number){
  this.prdAPIService.updateProduct(id ,this.newPrd).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl('/Products')
  })
}


}
