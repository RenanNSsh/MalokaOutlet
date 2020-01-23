import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  
  isExpanded = false;
  user: User;
      
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.userService.userSubject.subscribe(user=> {
      this.user = user;
    })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  userLogged():boolean{
    return this.userService.isLogged();
  }

  userLogout(){ 
    this.userService.logout();
  }
}
