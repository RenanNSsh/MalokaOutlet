import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent{
  isExpanded = false;
      
  constructor(private userService: UserService){}

  get user(){
    return this.userService.user;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public userLogged():boolean{
    return this.userService.isLogged();
  }

  userLogout(){ 
    this.userService.logout();
  }
}
