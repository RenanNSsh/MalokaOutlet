import { Component, OnInit } from "@angular/core";
import { CartShop } from "../cart/cart.shop";
import { Product } from "src/app/models/product.model";
import { Order } from "src/app/models/order";
import { UserService } from "src/app/user/user.service";
import { ItemOrder } from "src/app/models/item-order";
import { OrderService } from "src/app/order/order.service";
import { Router } from "@angular/router";

@Component({
    selector: 'hw-buy-shop',
    templateUrl: './buy.shop.component.html',
    styleUrls: ['./buy.shop.component.scss']
})
export class BuyShopComponent implements OnInit{
    cart: CartShop;
    products: Product[];

    constructor(private userService: UserService, private orderService: OrderService, private router: Router){

    }
            
    ngOnInit(): void {
        this.cart = new CartShop();
        this.products = this.cart.getProducts();
    }

    updatePrice(product: Product, amount: number): void{
        if( amount >= 1){
            product.amount = amount;
            this.cart.update(this.products);
        }
    }

    remove(product: Product): void{
        this.cart.removeProduct(product);
        this.products = this.cart.getProducts();
    }

    calculatedProductPrice(product: Product): number{
        return product.price * ( product.amount  || 1);
    }

    calculatedProductTotal(): number{
        return this.products.reduce<number>((sum, product) => {
            sum += this.calculatedProductPrice(product);
            return sum;
        },0)
    }

    purchase(){
        const order = this.createOrder();
        this.orderService.purchase(order).subscribe(orderId => {
            sessionStorage.setItem('orderId',orderId.toString());
            this.cart.clear();
            this.products = this.cart.getProducts();
            this.router.navigate(['/success-purchase'])
        },error => {
            console.log(error);
        });
    }

    createOrder(){
        const order = new Order();  
        order.userId = this.userService.user.id;
        order.shipZipCode = "123456789";
        order.shipCity = "São Paulo";
        order.shipState = "São Paulo";
        order.shipFullAddress = "Rua Antônio João de Medeiros, 425";
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate()+5);
        order.estimatedDeliveryDate = deliveryDate;
        order.paymentMethodId = 1;
        for(let product of this.products){
            let itemOrder = new ItemOrder();
            itemOrder.productId = product.id;
            itemOrder.amount = product.amount || 1;
            order.itensOrder.push(itemOrder);
        }
        return order;
    }

}