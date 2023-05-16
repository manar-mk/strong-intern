import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription, switchMap} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Actor, Movie} from "../../models/MovieModels";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`
    .trailer-actors {
      display: flex;
      justify-content: space-between;
      gap: 100px;
    }

    .trailer-text {
      margin-bottom: 10px;
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
    }
  `]
})
export class MovieComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  movieService = inject(MovieService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  trailerLink = '';
  actors: Actor[] = [];
  actorsLoading = true;
  similarMovies: Movie[] = [];
  similarMoviesLoading = true;

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.paramMap.pipe(
        switchMap(paramMap => this.movieService.getMovieById(+paramMap.get('id')!))
      ).subscribe(data => {
          this.movieService.movie.next(data);

          this.subscriptions.add(
            this.movieService.getMovieVideos(data.id).subscribe(info => this.trailerLink = info.results[0].key)
          );

          this.actorsLoading = true;
          this.subscriptions.add(
            this.movieService.getMovieActors(data.id).subscribe(info => this.actors = info.cast)
          );
          this.actorsLoading = false;

          this.similarMoviesLoading = true;
          this.subscriptions.add(
            this.movieService.getSimilarMovies(data.id).subscribe(info => this.similarMovies = info.results)
          );
          this.similarMoviesLoading = false;
        },
        error => {
          this.router.navigate(['/not-found']);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
