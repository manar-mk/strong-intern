import {Component, inject} from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html'
})
export class FavoriteMoviesComponent {
  movieService = inject(MovieService);
}
