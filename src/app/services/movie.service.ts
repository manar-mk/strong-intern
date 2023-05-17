import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Movie} from "../models/MovieModels";
import {defaultMovie} from "./defaultMovie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpClient = inject(HttpClient);
  BASE_URL = "https://api.themoviedb.org/3";
  API_KEY = "406a61a1c4bc9cf0c54b2373f74085ce";

  movie = new BehaviorSubject<any>(defaultMovie);
  query = new BehaviorSubject<string>('');

  queryResults = new BehaviorSubject<Movie[]>([]);
  favoriteMovies = new BehaviorSubject<Movie[]>([]);

  queryResultsLoading = true;

  getTrendingMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}`);
  }

  getUpcomingMovies(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/upcoming?api_key=${this.API_KEY}`);
  }

  getMoviesByQuery(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${this.query.value}`)
      .pipe(tap(() => this.queryResultsLoading = false));
  }

  getMovieById(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}`);
  }

  getMovieVideos(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/${id}/videos?api_key=${this.API_KEY}`);
  }

  getMovieActors(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/${id}/credits?api_key=${this.API_KEY}`);
  }

  getMovieImages(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/${id}/images?api_key=${this.API_KEY}`);
  }

  getSimilarMovies(id: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/movie/${id}/similar?api_key=${this.API_KEY}`);
  }
}
