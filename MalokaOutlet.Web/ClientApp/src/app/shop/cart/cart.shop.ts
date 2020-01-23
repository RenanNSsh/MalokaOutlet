import { Product } from "src/app/models/product.model";

export class CartShop{

    products: Product[] = [];

    constructor(){
        this.products = this.getProducts();
    }
    
    add(product: Product){
        const productsLocalStorage = localStorage.getItem('product-cart');
        if(productsLocalStorage){
            this.products = JSON.parse(productsLocalStorage);
        }
        this.products.push(product);
        this.update(this.products);
    }

    getProducts(): Product[] {
        const productsLocalStorage = localStorage.getItem('product-cart');
        if(productsLocalStorage) return JSON.parse(productsLocalStorage);
        
    }

    update(products: Product[]){
        localStorage.setItem('product-cart',JSON.stringify(products));
    }

    removeProduct(product: Product){
        this.products = this.products.filter(productList => productList.id != product.id);
        this.update(this.products);
    }

}