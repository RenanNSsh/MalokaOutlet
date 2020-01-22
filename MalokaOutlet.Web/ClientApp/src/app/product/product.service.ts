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
        return this.http.post<Product>(this.baseUrl+'api/product',product);
    }

    remove(product: Product): Observable<Product[]>{
        return this.http.delete<Product[]>(this.baseUrl+'api/product/'+product.id);
    }

    update(product: Product): Observable<Product>{
        return this.http.put<Product>(this.baseUrl+'api/product',product);
    }

    getAll(): Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl+'api/product');
    }

    get(productId: number): Observable<Product>{
        return this.http.get<Product>(this.baseUrl+'api/product/'+productId);
    }

    updatePicture(picture: File): Observable<string>{
        const formData = new FormData();
        formData.append("picture",picture, picture.name);
        return this.http.post<string>(this.baseUrl+'api/product/picture',formData );
    }


}