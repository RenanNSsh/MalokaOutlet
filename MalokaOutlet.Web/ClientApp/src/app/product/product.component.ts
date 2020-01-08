import { Component } from '@angular/core';

@Component({
    selector: 'hw-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})
export class ProductComponent {

    private _name: string;
    private _canSell: boolean;

    constructor(){
        this._name = 'Renan'; 
    }

    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get canSell(): boolean {
        return this._canSell;
    }
    public set canSell(canSell: boolean) {
        this._canSell = canSell;
    }

}
