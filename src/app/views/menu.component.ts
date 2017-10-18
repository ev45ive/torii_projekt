import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item" *ngFor="let link of links">
        <a class="nav-link" [routerLink]="link.path">{{link.title}} </a>
      </li>
    </ul>
  </div>
</nav>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  links = [ 
    { path:'', title:'Home'},
    // { path:'/login', title:'Login'},
    { path:'/search', title:'Search'},
    { path:'/test', title:'Test'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
