export class Product{
    id ?: number;
    name: string;
    description: string;
    price: number;
    amount: number;
    pictureName: string;

    calculatedPrice(){
        return 100;
    }
}