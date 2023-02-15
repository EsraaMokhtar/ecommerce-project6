import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {

@Input() receivedCatID:number=0;
prdListOfCat:Iproduct[]=[];
orderTotalPrice:number=0;
prdEdit:Iproduct = {} as Iproduct;
@Output() totalPriceChanged:EventEmitter<number>;

constructor(private prdService:ProductService,private router:Router,private prdAPIService:ProductsApiService){
  this.totalPriceChanged= new EventEmitter<number>();
  this.prdEdit=   {
    id: 10,
    name: "afterEdit",
    price: 41000,
    quantity : 1,
    catID: 4,
    imgURL: "assets/fresh.jpg"
  }
}

upadteTotalPrice(prdPrice:number,itemsCount:any){
  this.orderTotalPrice += (prdPrice * +itemsCount);
  this.totalPriceChanged.emit(this.orderTotalPrice);
}
  


  ngOnChanges(): void {

  if(this.receivedCatID==0){
    this.prdAPIService.getAllProducts().subscribe(data1=>{
      this.prdListOfCat=data1;
    })
  }else{
  this.prdAPIService.getProductsByCatID(this.receivedCatID).subscribe(data=>{
    this.prdListOfCat=data;
  })
}

}


  ngOnInit(): void {
     this.prdAPIService.getAllProducts().subscribe(data1=>{
    this.prdListOfCat=data1;
  })

  }


  DeleteProduct(id:number){
    this.prdAPIService.DeleteOneProduct(id).subscribe(data=>{
      console.log(data);
    });
  }
  

  updateOneProduct(id:number){
    this.prdAPIService.updateProduct(id ,this.prdEdit).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/Products')
    })
  }
  


openPrdDetails(prdID: number){

  this.router.navigate(['Products',prdID])

}

}