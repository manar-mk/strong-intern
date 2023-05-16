import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {FooterComponent} from './components/footer/footer.component';
import {MovieCoverComponent} from './components/movie-cover/movie-cover.component';
import {BigButtonComponent} from './components/UI/buttons/big-button.component';
import {MediumButtonComponent} from './components/UI/buttons/medium-button.component';
import {SmallButtonComponent} from './components/UI/buttons/small-button.component';
import {MovieCardComponent} from './components/UI/cards/movie-card/movie-card.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {FormsModule} from "@angular/forms";
import {MovieComponent} from './pages/movie/movie.component';
import {SafePipe} from './pipes/safe.pipe';
import {ActorCardComponent} from './components/UI/cards/actor-card/actor-card.component';
import {ActorListComponent} from './components/actor-list/actor-list.component';
import {FavoriteMoviesComponent} from './pages/favorite-movies/favorite-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    MovieCoverComponent,
    BigButtonComponent,
    MediumButtonComponent,
    SmallButtonComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieComponent,
    SafePipe,
    ActorCardComponent,
    ActorListComponent,
    FavoriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
