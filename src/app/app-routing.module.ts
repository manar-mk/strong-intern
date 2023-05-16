import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MovieComponent} from "./pages/movie/movie.component";
import {FavoriteMoviesComponent} from "./pages/favorite-movies/favorite-movies.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie',
    children: [
      {
        path: '',
        component: NotFoundComponent
      },
      {
        path: ':id',
        component: MovieComponent
      }
    ]
  },
  {
    path: 'favorites',
    component: FavoriteMoviesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
