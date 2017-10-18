import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="row"><div class="col"> 
      <app-menu></app-menu> 
    </div></div>
    <div class="row"><div class="col"> 
      <ng-content></ng-content> 
    </div></div>
    <div class="row"><div class="col"> 
      copyright Kulesza :P 
    </div></div>
`,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
