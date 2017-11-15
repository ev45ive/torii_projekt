import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

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
    return Observable.create( (observer)=>{

      setInterval(() => {
        let data = 'echo ' + param
        observer.next(data)
        observer.complete()
      }, 2000)

    })
  }

  getAllData(cb){ 
    var o1 = this.getTestData('Ala')

    o1.subscribe(nextData => {
      console.log(nextData)
    })

    console.log('najpierw')
  }

  ngOnInit() {
    this.getAllData( (...alldata) =>{
      console.log(alldata)
    })

  }

}
