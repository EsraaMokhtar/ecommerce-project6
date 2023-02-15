import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct | undefined = undefined;
  productsIDList:number[]=[];
  currentProductID:number = 0;
  currentIndex:number = 0;
  constructor(private prdService:ProductService,private activatedRoute: ActivatedRoute,private location:Location,private router:Router) {}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramMap =>{

      this.currentProductID =(paramMap.get('id')) ?Number(paramMap.get('id')) :0;

      let foundProduct= this.prdService.getProductByID(this.currentProductID);
      
        if(foundProduct){
          this.prd=foundProduct;
        }
        else{
        alert("Product not found");
        this.location.back();
      }
    });


    this.productsIDList=this.prdService.getPrdIDList();

  }

  goPrevFunc(){
    this.currentIndex = this.productsIDList.findIndex((item)=> item == this.currentProductID);
    this.router.navigate(['Products',this.productsIDList[--this.currentIndex]])

  }

  goNextFunc(){
    this.currentIndex = this.productsIDList.findIndex((item)=> item == this.currentProductID);
    this.router.navigate(['Products',this.productsIDList[++this.currentIndex]])

  }


}
