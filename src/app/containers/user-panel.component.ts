import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-panel',
  template: `
    <p *ngIf="user$ | async as user">
     Hello, {{user.name}}   (<span routerLink="/login">Logout</span>)</p>
  `,
  styles: []
})
export class UserPanelComponent implements OnInit {

  user$

  constructor(private service:UserService) {
    this.user$ = service.getUser()
  }

  ngOnInit() {
  }

}
