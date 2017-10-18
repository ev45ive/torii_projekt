import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <app-layout>
      <p>
        search works!
      </p>
      <options-tree [params]="parameters"></options-tree>
    </app-layout>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  parameters = [
    { label: "Wynagrodzenie", children: [], expanded: false },
    {
      label: "Wyksztalcenie", children: [
        { label: "Podstawowe", children: [], expanded: false },
        { label: "Srednie", children: [], expanded: false },
        { label: "Wyzsze", children: [], expanded: false },
      ], expanded: false
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
