import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  template: `
  <div class="row">
    <div class="col"> Menu </div>
  </div>
  <div class="row">
    <div class="col">
        <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
