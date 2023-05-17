import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Film } from "../models/movies.model";

@Injectable({
    providedIn: 'root'
})

export class DataService{

    film: Film = {};

    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    async myMethod(film: Film): Promise<void>{
        this.film = film;
    } 

    async getData(): Promise<Film>{
        return this.film;
    }
}