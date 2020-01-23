import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { Router } from "@angular/router";
import { CartShop } from "../cart/cart.shop";

@Component({
    selector: 'hw-product-shop',
    styleUrls: ['./product.shop.component.scss'],
    templateUrl: './product.shop.component.html'
})
export class ProductShopComponent implements OnInit{
    
    product = new Product();
    cart = new CartShop();

    constructor(private router: Router){
        
    }
    
    ngOnInit(): void {
        const product = JSON.parse(sessionStorage.getItem('product-detail'));
        if(product){
            this.product = product;
        }
    }

    buyProduct(product: Product){
        this.cart.add(product);
        this.router.navigate(['/buy-product'])
    }

}