import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'favourites',
  template: `
    <app-layout>
    <div *ngFor="let fav of favourites | async ">
      ★ {{ fav.occupation.name }}   
      <button (click)="remove(fav)" class="close">&times;</button>
    </div>
    </app-layout>
  `,
  styles: []
})
export class FavouritesComponent implements OnInit {

  favourites

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchFavourites()
  }

  fetchFavourites(){
      this.favourites = this.http.get<any>('http://localhost:3000/favourites?_expand=occupation')
      // .subscribe( favourites => this.favourites = favourites )
  }

  remove(favourite){
      this.http.delete('http://localhost:3000/favourites/'+favourite.id)
      .subscribe(()=>this.fetchFavourites())
  }

}
