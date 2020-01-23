import { ItemOrder } from "./item-order";

export class Order{
    id: number;
    orderDate: Date;
    userId: number;
    estimatedDeliveryDate: Date;
    shipZipCode: string;
    shipState: string;
    shipCity: string;
    shipFullAddress: string;
    shipAddressNumber: number;
    paymentMethodId: number;
    itensOrder: ItemOrder[];

    constructor(){
        this.itensOrder = [];
        this.orderDate = new Date();
    }
}