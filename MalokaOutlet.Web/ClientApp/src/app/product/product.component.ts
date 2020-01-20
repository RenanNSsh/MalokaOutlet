import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'hw-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})
export class ProductComponent {

    product: Product;

    constructor(private productService: ProductService){
    }

    register(){
        this.productService.add(this.product).subscribe(
            product => {
                console.log(product);
            },
            error => {
                console.log(error.error);
            }
        );
    }

}
