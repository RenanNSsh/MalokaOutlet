// Angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Project
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
@Component({
    selector: 'hw-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    
    returnUrl: string;
    message: string;
    user = new User();
    loading = false;
    @Output() signupEvent: EventEmitter<boolean> = new EventEmitter();
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService){}
        
    ngOnInit(): void {
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
    }

    login($event: Event) {
        this.loading = true;
        $event.preventDefault();
        this.userService.verifyUser(this.user).subscribe(user => {
            this.userService.user = user;
            this.userService.login(user);
            this.router.navigate([this.returnUrl]);
            this.loading = false;
        }, error => {
            console.log(error);
            this.message = error.error;
            this.loading = false;
        });
    }
    
    signupUser(){
        this.signupEvent.emit(true);
    }
}
