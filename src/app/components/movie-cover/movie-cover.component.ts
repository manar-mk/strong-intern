import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

interface BigButtonInfo {
  text: string,
  icon: string,
  bgColor: string
}

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.scss']
})
export class MovieCoverComponent implements OnInit, OnDestroy {
  movieService = inject(MovieService);
  activatedRoute = inject(ActivatedRoute);
  subscriptions = new Subscription();
  menuIcons = ['users.png', 'list.png', 'download.png', 'settings.png'];
  logoLink = '';
  buttons: BigButtonInfo[] = [
    {
      text: 'watch',
      icon: 'Vector.png',
      bgColor: '#5436A9'
    },
    {
      text: 'my list',
      icon: '+.png',
      bgColor: '#5C5C5C'
    }
  ];

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.paramMap.pipe(
        switchMap(paramMap => this.movieService.getMovieById(+paramMap.get('id')!))
      ).subscribe(data => {
          this.subscriptions.add(
            this.movieService.getMovieImages(data.id).subscribe(info => {
              try {
                this.logoLink = info.logos[0].file_path;
              } catch (error) {
                this.logoLink = '';
              }
            })
          )
        },
        error => {
          this.subscriptions.add(
            this.movieService.getMovieImages(this.movieService.movie.value.id).subscribe(info => {
              this.logoLink = info.logos[0].file_path;
            })
          )
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
