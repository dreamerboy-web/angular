import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  constructor() { }

  users = [
    {
      name: "Roman",
      age: 18,
      email: "foreverkosur@gmail.com",
      is_blocked: false
    },
    {
      name: "Stacy",
      age: 18,
      email: "test@gmail.com",
      is_blocked: true
    },
    {
      name: "Viktor",
      age: 23,
      email: "test2@gmail.com",
      is_blocked: false
    }
    ,
    {
      name: "Diktor",
      age: 22,
      email: "test3@gmail.com",
      is_blocked: true
    },
    {
      name: "Gomer",
      age: 22,
      email: "test4@gmail.com",
      is_blocked: false
    }];
  loginValue = {
    email: '',
    name: ''
  };

  logination(login: NgForm) {
    let validEmail = this.users.find(({email})=>{
      return email === login.value.email
    });
    let validName = this.users.find(({name})=>{
      return name === login.value.name
    });

    if(validEmail !== undefined && validName !== undefined) alert(`Oh! Hi ${validName.name}`);
    else alert('Not valid data');

  }
}
