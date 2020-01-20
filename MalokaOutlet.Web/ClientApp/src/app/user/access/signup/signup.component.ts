import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "src/app/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../user.service";

@Component({
    selector: 'hw-signup',
    styleUrls: ['./signup.component.scss'],
    templateUrl: './signup.component.html'
})
export class SignUpComponent{
    returnUrl: string;
    message: string;
    user = new User();
    loading = false;
    @Output() signupEvent: EventEmitter<boolean> = new EventEmitter();
    
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService){}
        
    ngOnInit(): void {
        this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
    }

    signup($event: Event) {
        this.loading = true;
        $event.preventDefault();
        this.userService.signup(this.user).subscribe(user => {
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
    
    loginUser(){
        console.log('emitindo');
        this.signupEvent.emit(false);
    }
}