import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item" 
        routerLinkActive="active" 
        [routerLinkActiveOptions]="{exact:true}"  
         *ngFor="let link of links">
        <a class="nav-link"   [routerLink]="link.path">{{link.title}} </a>
      </li>
    </ul>
  </div>
</nav>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  @Input()
  links = []

  constructor() { }

  ngOnInit() {
  }

}
