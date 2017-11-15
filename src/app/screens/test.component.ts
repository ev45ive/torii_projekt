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

  getTestData(param) {
    return new Promise((resolve)=>{
      setTimeout(() => {
        let data = 'echo ' + param
        resolve(data)
      }, 2000)
    })
  }

  getAllData(cb){ 
    var p1 = this.getTestData('Ala')

    p1.then(x1 => x1 + ' ma')
      .then(x2 => this.getTestData(x2 + ' kota'))
      .then(x3 => console.log(x3))

    console.log('najpierw')
  }

  ngOnInit() {
    this.getAllData( (...alldata) =>{
      console.log(alldata)
    })

  }

}
