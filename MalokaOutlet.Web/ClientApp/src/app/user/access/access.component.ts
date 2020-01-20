import { Component } from "@angular/core";
import { trigger, transition, style, animate, state } from "@angular/animations";

@Component({
    selector: 'hw-access',
    styleUrls:['access.component.scss'],
    templateUrl: 'access.component.html',
    animations: [
        trigger('myInsertRemoveTrigger', [
            transition(':enter', [
              style({ opacity: 0 }),
              animate('5s', style({ opacity: 1 })),
            ]),
            transition(':leave', [
              animate('5s', style({ opacity: 0 }))
            ])
          ])
        ]})
export class AccessComponent{

    userLogin = true;
    showLogin = true;

    signupUser(inSignup){
        this.userLogin = !inSignup;
        setTimeout(()=>{
            console.log(this.showLogin, this.userLogin)
            this.showLogin = !inSignup;
        },500)
    }


}