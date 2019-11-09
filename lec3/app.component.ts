import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show: boolean = false;
  error: boolean = false;
  // dollar: number;
  //
  // currencyConverter =  fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  //   .then(value => value.json())
  //   .then(jsonValue => {
  //     this.dollar = jsonValue[0].sale;
  //     console.log(this.dollar);
  //   });

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
      ovner: this.users[Math.floor(Math.random() * this.users.length)]
    },
    {
      type: 'Dormitory',
      prise: 10000,
      location: 'Kyiv',
      ovner: this.users[Math.floor(Math.random() * this.users.length)]
    },
    {
      type: 'Street',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random() * this.users.length)]
    },
    {
      type: 'Ocean',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random() * this.users.length)]
    },
    {
      type: 'Sahara',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random() * this.users.length)]
    },
    {
      type: 'Word',
      prise: 100000,
      location: 'All',
      ovner: this.users[Math.floor(Math.random() * this.users.length)]
    }
  ];

  chose: number = 0;

  errorsStules = {
    color: this.error ? 'red' : '#fff',
    background: this.error ? 'blue' : 'red',
    height: this.error ? '200px' : '100px',
    width: this.error ? '100px' : '500px'
  };

  singIn() {
    this.chose = 0;
  }

  logIn() {
    this.chose = 1;
  }

  togleErr() {
    this.errorsStules.background = this.error ? 'blue' : 'red';
    this.errorsStules.color = this.error ? 'red' : '#fff';
    this.errorsStules.height = this.error ? '200px' : '300px';
    this.errorsStules.width = this.error ? '100px' : '500px';
    this.error = !this.error
  }

  showUsers() {
    this.show = !this.show
  }

}

