
import {Injectable, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of, Subject} from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class UserService{
    
 
    private baseUrl: string;
    private logged: Subject<boolean> = new Subject();
    private _user: User;

    constructor(private http: HttpClient, private router: Router,  @Inject('BASE_URL') baseUrl){
        this.baseUrl = baseUrl;
        this.updateUser();
    }

    get user(): User{
        this.updateUser();
        return this._user;
    }

    set user(user: User){
        sessionStorage.setItem('user-authentified',JSON.stringify(user));
        this._user = user;
    }

    updateUser(): void{
        const userJson = sessionStorage.getItem('user-authentified');
        this._user = JSON.parse(userJson);
    }
        
    verifyUser(user: User): Observable<User>{
        // return this.http.post<User>(this.baseUrl+'api/user/verify',user,{headers});
        return this.http.post<User>(this.baseUrl+'api/user/verify',user);

    }

    signup(user: User) {
        return this.http.post<User>(this.baseUrl+'api/user',user);


    }

    $isLogged(): Observable<boolean>{
        return this.logged;
    }

    isLogged(): boolean{
        return !!this._user && !!this._user.email && !!this._user.password;
    }

    login(user: User): void {
        this.logged.next(true);
    }

    logout(): void {
        this._user = null;
        this.logged.next(false);
        this.router.navigate(['/login'])
    }
}