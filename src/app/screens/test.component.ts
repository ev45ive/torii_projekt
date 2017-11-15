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

  getTestData(cb){

    setTimeout(()=>{
      let data = 'test ' + Date.now()
      cb(data)
    },2000)
  }

  ngOnInit() {
    let callback = (data)=>{
      console.log(data)
      
    }
    this.getTestData(callback)

  }

}
