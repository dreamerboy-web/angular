import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.css']
})
export class RegistrationUserComponent{

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
  regValue = {
    email: '',
    name: '',
    age: '',
    is_blocked: Boolean(Math.floor(Math.random() * 2))
  };

  singIner(registration: NgForm) {

    let itar = this.users.find(({email}) =>{
      return email === registration.value.email
    });

    if(itar === undefined) this.users.push(registration.value)

  }

}
