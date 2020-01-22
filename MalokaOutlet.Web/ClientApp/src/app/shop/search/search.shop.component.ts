import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
    selector: 'hw-search-shop',
    templateUrl: './search.shop.component.html',
    styleUrls: ['./search.shop.component.scss']
})
export class SearchShopComponent implements OnInit{
    
    products: Product[];
    
    ngOnInit(): void {

    }


}