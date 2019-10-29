import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchText = "";
  show: boolean = false;
  houses = [
    {
      type: 'Vila',
      prise: 1000,
      location: 'Lviv'
    },
    {
      type: 'Dormitory',
      prise: 10000,
      location: 'Kyiv'
    },
    {
      type: 'Street',
      prise: 100000,
      location: 'All'
    }
  ];

  chose: number = 0;

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
}
