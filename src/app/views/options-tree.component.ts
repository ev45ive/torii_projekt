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
      <li *ngFor="let param of params" 
        [class.expanded]="param.expanded"
        [class.children]="param.children.length">

        <span (click)="toggle(param)">{{param.label}}</span>

        <options-tree *ngIf="param.expanded && param.children.length" [params]="param.children"></options-tree>
      </li>
    </ul>
  `,
  styles: [`
    li.children > span::after{
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: .255em;
      vertical-align: .255em;
      content: "";
      border-top: .3em solid;
      border-right: .3em solid transparent;
      border-left: .3em solid transparent;
    }
    li.children.expanded > span::after{
      border-top: none;
      border-bottom: .3em solid;
    }
  `]
})
export class OptionsTreeComponent implements OnInit {

  @Input()
  params:Item[] = []

  toggle(param){
    param.expanded = !param.expanded
  }

  constructor() { }

  ngOnInit() {
  }

}
