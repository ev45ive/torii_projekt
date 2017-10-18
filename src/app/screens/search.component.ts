import { Component, OnInit } from '@angular/core';
import { Item } from '../views/options-tree.component';

@Component({
  selector: 'app-search',
  template: `
    <app-layout>
      <p>
        search works!
      </p>
      <div class="row">
        <div class="col">
            <options-tree [params]="parameters" (paramChange)="treeChange($event)"></options-tree>          
        </div>
        <div class="col">{{ selection | json }} </div>
      </div>
      </app-layout>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  selection = {}

  treeChange(event){
    console.log(event)
    if(event.checked){
      this.selection[event.param.label] = event.checked;
    }else{
      delete this.selection[event.param.label]
    }
  }

  parameters:Item[] = [
    { label: "Wynagrodzenie", children: [], expanded: false },
    {
      label: "Wyksztalcenie", children: [
        { label: "Podstawowe", children: [], expanded: false },
        { label: "Srednie", children: [], expanded: false },
        { label: "Wyzsze", children: [], expanded: false },
      ], expanded: true
    },
    {
      label: "Branza", children: [
        {
          label: "Medycyna", children: [
            { label: "Chirurg", children: [], expanded: false },
            { label: "Okulista", children: [], expanded: false },
          ], expanded: false
        },
        { label: "IT", children: [], expanded: false },
      ], expanded: false
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
