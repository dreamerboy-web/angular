import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }
  searchText = "";
  show: boolean = false;

  search(ev) {
    this.searchText = ev.target.value;
    this.show = false;
  }

  showtext() {
    this.show = true;
  }

}
