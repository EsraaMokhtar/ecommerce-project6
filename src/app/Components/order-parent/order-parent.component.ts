import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';
import { ProductsApiService } from 'src/app/Services/products-api.service';


@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent implements AfterViewInit , OnInit {
catList:Icategory[]=[];
selectedCatID:number=0;
receivedOrderTotalPrice:number=0;


constructor(private prdAPIService:ProductsApiService){
  // this.catList=[{id:1,name:"tornado"} ,{id:2,name:"toshiba"},{id:3,name:"kiriazi"},{id:4,name:"fresh"}]
}

  ngAfterViewInit(): void {    
}

  
onTotalPrice(totalPrice:number){
  this.receivedOrderTotalPrice=totalPrice;
}

ngOnInit(): void {
  this.prdAPIService.getAllCategory().subscribe(data1=>{
 this.catList=data1;
})
}



}
