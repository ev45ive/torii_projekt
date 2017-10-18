import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'options-tree',
  template: `
    <p>
      options-tree works!
    </p>
  `,
  styles: []
})
export class OptionsTreeComponent implements OnInit {

  @Input()
  params = []

  constructor() { }

  ngOnInit() {
  }

}
