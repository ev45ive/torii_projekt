import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="row"><div class="col"> 
      <app-menu [links]="links"></app-menu> 
    </div></div>
    <div class="row"><div class="col"> 
      <ng-content></ng-content> 
    </div></div>
    <div class="row"><div class="col"> 
      ---
    </div></div>
`,
  styles: []
})
export class LayoutComponent implements OnInit {

  links =  [ 
    { path:'/', title:'Home'},
    // { path:'/login', title:'Login'},
    { path:'/search', title:'Search'},
    { path:'/test', title:'Test'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
