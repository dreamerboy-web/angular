import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchText = "";
  show: boolean = false;
  error: boolean = false;
  isHidden: boolean = true;
  showId: number = -1;


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



  chose: number = 0;
  errorsStules = {
    color: this.error ? 'red' : '#fff',
    background: this.error ? 'blue' : 'red',
    height: this.error ? '200px' : '100px',
    width: this.error ? '100px' : '500px'
  };

  regValue = {
    email: '',
    name: '',
    age: '',
    is_blocked: Boolean(Math.floor(Math.random() * 2))
  };

  loginValue = {
    email: '',
    name: ''
  };

  newHouse = {
    type: '',
    prise: '',
    location: '',
    ovner: this.users[Math.floor(Math.random()*this.users.length)]
  };

  search(ev) {
    this.searchText = ev.target.value;
    this.show = false;
  }

  showtext() {
    this.show = true;
  }

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

  singIner(registration: NgForm) {

    let itar = this.users.find(({email}) =>{
      return email === registration.value.email
    });

    if(itar === undefined) this.users.push(registration.value)

  }

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

  showUsers() {
    this.show = !this.show
  }

  showAll(index) {

    this.isHidden = false;
    this.showId = index;

  }

  houseRegistration(houseReg: NgForm) {

    houseReg.value.ovner = this.newHouse.ovner
    this.houses.push(houseReg.value);

  }
}

