import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movies:any= [];

  constructor(private _movieservice:MovieService){
    _movieservice.getmovies().subscribe(
      (data:any) =>{
        this.movies = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  getRating(rating:number){
    return Math.floor(rating)
  }

}

