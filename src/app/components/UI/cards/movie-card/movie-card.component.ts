import {Component, inject, Input, OnInit} from '@angular/core';
import {Movie} from "../../../../models/MovieModels";
import {MovieService} from "../../../../services/movie.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  movieService = inject(MovieService);
  redHeart = false;

  addFavorite() {
    this.movieService.favoriteMovies.next([...this.movieService.favoriteMovies.value, this.movie]);
    this.redHeart = true;
  }

  removeFavorite() {
    this.movieService.favoriteMovies.next(
      this.movieService.favoriteMovies.value.filter((favoriteMovie: Movie) => favoriteMovie.id !== this.movie.id)
    );
    this.redHeart = false;
  }

  ngOnInit(): void {
    if (this.movieService.favoriteMovies.value.length !== 0) {
      this.redHeart = this.movieService.favoriteMovies.value.map((favoriteMovie: Movie) => favoriteMovie.id).includes(this.movie.id);
    }
  }
}
