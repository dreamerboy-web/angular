import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration-house',
  templateUrl: './registration-house.component.html',
  styleUrls: ['./registration-house.component.css']
})
export class RegistrationHouseComponent {

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
  houses = [
    {
      type: 'Vila',
      prise: 1000,
      location: 'Lviv',
      ovner: this.users[Math.floor(Math.random()*this.users.length)]
    },
    {
      type: 'Dormitory',
      prise: 10000,
      location: 'Kyiv',
      ovner: this.users[Math.floor(Math.random()*this.users.length)]
    },
    {
      type: 'Street',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random()*this.users.length)]
    },
    {
      type: 'Ocean',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random()*this.users.length)]
    },
    {
      type: 'Sahara',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random()*this.users.length)]
    },
    {
      type: 'Word',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random()*this.users.length)]
    }
  ];
  newHouse = {
    type: '',
    prise: '',
    location: '',
    ovner: this.users[Math.floor(Math.random()*this.users.length)]
  };

  houseRegistration(houseReg: NgForm) {

    houseReg.value.ovner = this.newHouse.ovner
    this.houses.push(houseReg.value);

  }


}
