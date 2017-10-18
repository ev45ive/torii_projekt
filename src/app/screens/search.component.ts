import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <app-layout>
      <p>
        search works!
      </p>
    </app-layout>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
