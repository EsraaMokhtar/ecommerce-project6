import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Iproduct } from '../Models/iproduct';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})

export class ProductsApiService {

  private httpOptions={};
  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({ 
        'content-type': 'application/json'
      })
    };
  }

  getAllProducts():Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/prdList`);
  }

  getAllCategory():Observable<Icategory[]>{
    return this.httpClient.get<Icategory[]>(`${environment.APIBaseURL}/catList`);
  }

  getProductsByCatID(catId:number):Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.APIBaseURL}/prdList?catID=${catId}`);
  }


  getProductByID(prdID:number):Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.APIBaseURL}/prdList/${prdID}`);
  }

  addProduct(newProduct:Iproduct):Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.APIBaseURL}/prdList`,JSON.stringify(newProduct),this.httpOptions);
  }

  DeleteOneProduct(prdID:number):Observable<Iproduct>{
    return this.httpClient.delete<Iproduct>(`${environment.APIBaseURL}/prdList/${prdID}`);
  }

  
  updateProduct(prdID:number ,newProduct:Iproduct ):Observable<Iproduct>{
    return this.httpClient.patch<Iproduct>(`${environment.APIBaseURL}/prdList/${prdID}`,JSON.stringify(newProduct),this.httpOptions);
  }


}