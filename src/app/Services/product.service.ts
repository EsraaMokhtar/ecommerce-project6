import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdList:Iproduct[];
  lastId :number = 0;
  constructor() { 
    this.prdList=[
      {id:1,name:"tornado",price:23000,quantity:2,catID:1,imgURL:"assets/tornado.jpg"},
      {id:2,name:"tornado",price:21000,quantity:2,catID:1,imgURL:"assets/tornado.jpg"},
      {id:3,name:"toshiba",price:15500,quantity:3,catID:2,imgURL:"assets/toshiba.jpg"},
      {id:4,name:"toshiba",price:17900,quantity:2,catID:2,imgURL:"assets/toshiba.jpg"},
      {id:5,name:"toshiba",price:13000,quantity:1,catID:2,imgURL:"assets/toshiba.jpg"},
      {id:6,name:"kiriazi",price:37000,quantity:1,catID:3,imgURL:"assets/kiriazi.jpg"},
      {id:7,name:"kiriazi",price:36000,quantity:2,catID:3,imgURL:"assets/kiriazi.jpg"},
      {id:8,name:"fresh",price:42400,quantity:3,catID:4,imgURL:"assets/fresh.jpg"},
      {id:9,name:"fresh",price:41000,quantity:1,catID:4,imgURL:"assets/fresh.jpg"}];
 
  }


  getAllProducts():Iproduct[]{
    return this.prdList;

  }


  getProductsByCatID(categoryID:number):Iproduct[]{
    if(categoryID == 0){
      return this.getAllProducts();
    }
    else{
      return this.prdList.filter(prd=>prd.catID==categoryID);
    }
  }


  getProductByID(prdID:number):Iproduct|undefined{
    return this.prdList.find(prd=>prd.id==prdID);
  }

  add(pname: string , pprice: string , pquantity : string, pcatId: string){
    this.lastId = this.prdList[this.prdList.length-1].id  + 1;
    this.prdList.push({id:this.lastId , name :pname , price :Number(pprice ), quantity :Number(pquantity)  , catID :Number(pcatId)  , imgURL : "assets/tornado.jpg" });
    console.log(this.prdList);
  }


  getPrdIDList():number[]{
    return this.prdList.map(prd=>prd.id);
  }


}
