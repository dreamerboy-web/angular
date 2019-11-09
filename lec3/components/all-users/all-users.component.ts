import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent{

  constructor() { }

  @Input() user;
  @Input() id;
  @Output() deleteUser = new EventEmitter();

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



  deleteUsers() {
    this.deleteUser.emit(this.id)
  }

  clickHere(i) {
    console.log(i);
    this.users.splice(i, 1)
  }

}
