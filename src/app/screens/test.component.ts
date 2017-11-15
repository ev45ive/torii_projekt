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

  getTestData(cb) {

    setTimeout(() => {
      let data = 'test ' + Date.now()
      cb(data)
    }, 2000)
  }

  getAllData(cb){    
    this.getTestData((data) => {
      console.log(data)

      this.getTestData(data2 => {
        console.log(data2)

        this.getTestData(data3 => {
          console.log(data3)

          cb(data,data2,data3)
        })

      })
    })
  }

  ngOnInit() {
    this.getAllData( (...alldata) =>{
      console.log(alldata)
    })

  }

}
