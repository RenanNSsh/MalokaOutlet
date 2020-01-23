import { Component, OnInit } from "@angular/core";
import { CartShop } from "../cart/cart.shop";
import { Product } from "src/app/models/product.model";

@Component({
    selector: 'hw-buy-shop',
    templateUrl: './buy.shop.component.html',
    styleUrls: ['./buy.shop.component.scss']
})
export class BuyShopComponent implements OnInit{
    cart: CartShop;
    products: Product[];
            
    ngOnInit(): void {
        this.cart = new CartShop();
        this.products = this.cart.getProducts();
    }

    updatePrice(product: Product, amount: number){
        if( amount >= 1){
            product.amount = amount;
            this.cart.update(this.products);
        }
    }

    remove(product: Product){
        this.cart.removeProduct(product);
        this.products = this.cart.getProducts();
    }

    calculatedProductPrice(product: Product): number{
        return product.price * ( product.amount  || 1);
    }

    calculatedProductTotal(){
        return this.products.reduce<number>((sum, product) => {
            sum += this.calculatedProductPrice(product);
            return sum;
        },0)
    }

}