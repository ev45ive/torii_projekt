import { Component, OnInit, Input } from '@angular/core';

interface Item{
  label:string
  children: Item[]
  expanded:boolean
}

@Component({
  selector: 'options-tree',
  template: `
    <ul>
      <li *ngFor="let param of params">
        <span>{{param.label}}</span>
        <options-tree *ngIf="param.children" [params]="param.children"></options-tree>
      </li>
    </ul>
  `,
  styles: []
})
export class OptionsTreeComponent implements OnInit {

  @Input()
  params:Item[] = []

  constructor() { }

  ngOnInit() {
  }

}
