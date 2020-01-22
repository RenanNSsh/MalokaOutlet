import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
    selector: 'hw-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})
export class ProductComponent implements OnInit{
    
    pictureSelected: File;
    product: Product;
    loading = false;
    message = "";

    constructor(private productService: ProductService,private router: Router){
    }

    ngOnInit(): void {
        this.product = JSON.parse(sessionStorage.getItem('product-updating')) || new Product();
    }

    changePicture(files: FileList): void{
        this.loading = true;
        this.pictureSelected = files.item(0);
        this.productService.updatePicture(this.pictureSelected).subscribe(
            pictureName => {
                this.product.pictureName = pictureName;
                this.loading = false;
            },
            error => {
                console.log(error.error);
            }
        );
    }

    register(): void{
        if(this.product.id){
            this.update();
        }else{
            this.productService.add(this.product).subscribe(
                product => {
                    console.log(product);
                    this.message = "";
                    this.router.navigate(['/search-product'])
                },
                error => {
                    console.log(error.error);
                    this.message = error.error;
                }
            );
        }
    }

    update(): void{
        this.productService.update(this.product).subscribe(
            product => {
                console.log(product);
                this.message = '';
                this.router.navigate(['/search-product'])
            },
            error => {
                console.log(error.error);
                this.message = error.error;
            }
        )
    }

}
