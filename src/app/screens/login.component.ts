import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <form #formRef="ngForm" (ngSubmit)="login(formRef.value)">
      <div class="form-group">
        <label for="">Login</label>
        <input type="text" name="name" ngModel class="form-control">
        </div>
      <div class="form-group">
        <label for="">Password</label>
        <input type="password" name="password" ngModel class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-block">Login</button>
        </div>
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService, 
  private router:Router) { }

  login(user){
    this.service.logIn(user)
      .subscribe(user => {
        debugger
        //  wait for login!
        this.router.navigate(['/'])
      })
  }

  ngOnInit() {
  }

}
