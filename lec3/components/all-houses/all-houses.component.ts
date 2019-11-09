import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent{

  constructor() { }

  isHidden: boolean = true;
  showId: number = -1;

  dollar: number;

  currencyConverter =  fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(value => value.json())
    .then(jsonValue => {
      this.dollar = jsonValue[0].sale;
      console.log(this.dollar);
    });

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

  showAll(index) {

    this.isHidden = false;
    this.showId = index;

  }
}
