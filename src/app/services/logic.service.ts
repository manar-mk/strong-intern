import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from "rxjs";
import { Film } from "../models/movies.model";


@Injectable({
    providedIn: 'root'
})

export class LogicService{
    baseUrl = "https://hammerhead-app-ehhxu.ondigitalocean.app/api/";
    constructor(private http: HttpClient) {}

    getAllFilms(keyword: string = '') : Observable<Film[]>{
        return this.http.get<Film[]>(`${this.baseUrl}films`, {params: {keyword}});
    }

    getFilm(id: string): Observable<Film>{
        return this.http.get<Film>(`${this.baseUrl}films/${id}`)
    }

    logIn(user: { email: string; password: string; }) {
        return this.http.post(`${this.baseUrl}auth/login`, user)
        .pipe(
            tap(this.setToken)
        )
    }

    register(user: {fullName: string, email: string, password: string}){
        return this.http.post(`${this.baseUrl}auth/register`, user)
        .pipe(
            tap(this.setToken)
        )
    }

    likeFilm(filmId: string, token: string){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        return this.http.post(`${this.baseUrl}user/like`,{filmId},{ headers: headers});
    }

    getLikedFilms(token: string) : Observable<any>{
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
        return this.http.get(`${this.baseUrl}user/liked`, {headers: headers});
    }

    private setToken(response: any){
        if(response){
            localStorage.setItem('fb-token', response.accessToken)
        } else {
            localStorage.clear()
        }
    }

    get token() {
        return localStorage.getItem('fb-token')
    }

    logout() {
        this.setToken(null)
    }

    isAuthenticated() {
        return !!this.token
    }
 }