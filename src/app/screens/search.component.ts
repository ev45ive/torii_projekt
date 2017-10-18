import { Component, OnInit } from '@angular/core';
import { Item } from '../views/options-tree.component';
import { HttpClient } from '@angular/common/http';

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
        <div class="col">
        <h5>Params:</h5>
        {{ selection | json }} 
        <h5>Results:</h5>
        <ul>
          <li *ngFor="let result of results">
            {{result.name}}
          </li>
        </ul>

        </div>
      </div>
      </app-layout>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  selection = {}


  treeChange(event){
    // console.log(event)
    if(event.parent){
      if(event.checked){
        this.selection[event.parent.label] = this.selection[event.parent.label] || {}; 
        this.selection[event.parent.label][event.param.label] = event.checked;
      }else{
        delete this.selection[event.parent.label][event.param.label]
      }
    }
    let url_parts = {}, url = []
    for(let key in this.selection){
      for(let param in this.selection[key]){
        url_parts[key] = url_parts[key] || []
        url_parts[key].push( param )

        url.push( `params.${key}=${param}` )
      }
    }
    console.log(url_parts,url)

    this.http.get<any>(`http://localhost:3000/occupations?` + url.join('&'))
    .subscribe( data => {
      console.log(data)
      this.results = data;
    })
  }

  results = []

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

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}
