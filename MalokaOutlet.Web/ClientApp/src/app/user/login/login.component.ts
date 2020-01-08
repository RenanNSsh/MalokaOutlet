// Angular
import { Component } from '@angular/core';

// Project
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'hw-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public autheticatedUser: boolean;
    public user = new User();

    login($event: Event) {
        $event.preventDefault();
        if (this.user.email === 'renan.sanches_123@hotmail.com' && this.user.password === '123') {
            this.autheticatedUser = true;
        }
    }
}
