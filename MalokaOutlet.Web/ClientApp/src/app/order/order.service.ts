import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderService{
    private baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){
        this.baseUrl = baseUrl;
    }

    purchase(order: Order): Observable<number>{
        return this.http.post<number>(this.baseUrl+'api/order',order);

    }
}