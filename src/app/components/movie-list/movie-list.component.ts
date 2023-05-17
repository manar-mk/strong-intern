import {Component, Input} from '@angular/core';
import {Movie} from "../../models/MovieModels";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styles: [`
    .movie-cards {
      margin-top: 21px;
      display: flex;
      flex-wrap: wrap;
      gap: 42px;
    }
  `]
})
export class MovieListComponent {
  @Input() movies!: Movie[];
  @Input() pageLimit!: number;
  @Input() moviesLoading!: boolean;

  moviesPage = 6;

  moviesPageHandle(show: boolean) {
    if (show) {
      this.moviesPage += this.pageLimit;
      return;
    }
    this.moviesPage -= this.pageLimit;
  }
}
