import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    private baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
        this.baseUrl = baseUrl;
    }

    add(product: Product): Observable<Product>{
        return this.http.post<Product>(this.baseUrl+'/product',product);
    }

    remove(productId: number): Observable<Product>{
        return this.http.delete<Product>(this.baseUrl+'/product/'+productId);
    }

    update(product: Product): Observable<Product>{
        return this.http.post<Product>(this.baseUrl+'/product',product);
    }

    getAll(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl+'/product');
    }

    get(productId: number): Observable<Product>{
        return this.http.get<Product>(this.baseUrl+'/product/'+productId);
    }


}