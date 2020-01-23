import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hw-success-purchase-shop',
    styleUrls: ['./success-purchase.shop.component.scss'],
    templateUrl: './success-purchase.shop.component.html'
})
export class SuccessPurchaseShop implements OnInit{
    public orderId: string;

    ngOnInit(): void {
        this.orderId = sessionStorage.getItem('orderId');
    }
}