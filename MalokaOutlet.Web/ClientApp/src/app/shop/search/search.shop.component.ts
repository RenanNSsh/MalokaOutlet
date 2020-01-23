import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/product/product.service";
import { Router } from "@angular/router";

@Component({
    selector: 'hw-search-shop',
    templateUrl: './search.shop.component.html',
    styleUrls: ['./search.shop.component.scss']
})
export class SearchShopComponent implements OnInit{
    
    products: Product[];

    constructor(private productService: ProductService, private router: Router){

    }
    
    ngOnInit(): void {
        this.productService.getAll().subscribe(products => {
            this.products = products;
        })
    }


    detail(product: Product){
        sessionStorage.setItem('product-detail',JSON.stringify(product))
        this.router.navigate(['./shop-product']);
    }

}