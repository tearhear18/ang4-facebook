import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user/user.service';
import { Iuserlogin } from './../../../../services/user/iuserlogin';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user : Iuserlogin;

  constructor(private _route: Router ) { 
    this.user ={
      email_phone: 'tearhear18@gmail.com',
      password: '123123'
    }
  }

  ngOnInit() {
  }
  login(){
    console.log( this.user)
    this._route.navigate(['member']);
  }

}
