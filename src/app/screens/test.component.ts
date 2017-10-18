import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <app-layout>
      <p>
        test works!
      </p>
    </app-layout>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
