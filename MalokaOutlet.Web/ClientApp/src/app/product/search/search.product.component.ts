import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
    selector: 'hw-search-product',
    styleUrls: ['./search.product.component.scss'],
    templateUrl: './search.product.component.html'
})
export class SearchProductComponent implements OnInit{
    
    public products: Product[];

    ngOnInit(): void {
        this.productService.getAll().subscribe(products => {
            this.products = products;
        })
    }

    constructor(private productService: ProductService, private router: Router){

    }
    
    addProduct(){
        sessionStorage.removeItem('product-updating');
        this.router.navigate(['/product'])
    }

    removeProduct(product: Product){
        const removeConfirm = confirm("Deseja realmente remover o produto selecionado?");
        if(removeConfirm){
            this.productService.remove(product).subscribe(
                products => {
                    this.products = products;
                },
                error => {
                    console.log(error.error)
                }
            )
        } 
    }

    updateProduct(product: Product){
        sessionStorage.setItem('product-updating', JSON.stringify(product))
        this.router.navigate(['/product'])
    }

}