import { Product } from "src/app/models/product.model";

export class CartShop{

    products: Product[] = [];

    constructor(){
        this.products = this.getProducts();
    }
    
    add(product: Product): void{
        const productsLocalStorage = localStorage.getItem('product-cart');
        if(productsLocalStorage){
            this.products = JSON.parse(productsLocalStorage);
        }
        const productExists = this.products.find(productList => productList.id === product.id);
        if(productExists && productExists.amount){
            productExists.amount++;
        }else if(productExists){
            productExists.amount = 2;
        }else{
            this.products.push(product);
        }
        
        this.update(this.products);
    }

    getProducts(): Product[] {
        const productsLocalStorage = localStorage.getItem('product-cart');
        if(productsLocalStorage) return JSON.parse(productsLocalStorage);
        return this.products;
    }

    update(products: Product[]): void{
        localStorage.setItem('product-cart',JSON.stringify(products));
    }

    removeProduct(product: Product): void{
        this.products = this.products.filter(productList => productList.id != product.id);
        this.update(this.products);
    }

    clear(): void{
        this.products = [];
        this.update([]);
    }

}