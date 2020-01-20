import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from "../user/user.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService implements CanActivate{
    
    constructor(private router: Router, private userService:UserService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.userService.isLogged()){
            return true;
        }
        this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}})
        return false; 
    }

}