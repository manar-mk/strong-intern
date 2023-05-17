import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { Film } from 'src/app/models/movies.model';
import { DataService } from 'src/app/services/data.service';
import { LogicService } from 'src/app/services/logic.service';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  loading = false;
  filmLiked = false;
  text = "The movie has been added to the page 'favorites'.";

  @ViewChild('input') searchInput?: any;

  constructor(private logicService: LogicService,
    private dataService: DataService,
    readonly service: NotificationService){}
  
  films: Film[] = [];

  ngOnInit(): void {
    console.log(`token: `, this.logicService.token)
    this.logicService.getAllFilms().subscribe(res => {
      this.films = res;
    })
  }

  getFilm(film: Film){
    this.dataService.myMethod(film);
  }

  getSearchingFilms(keyword: string){
    this.loading = true;
    this.logicService.getAllFilms(keyword).subscribe(res => {
      this.films = res;
      this.searchInput.nativeElement.value = '';
      this.loading = false;
    })
  }

  likeFilm(film: Film){
    const token = this.logicService.token;
    if(!token || !film.id) return;
    this.logicService.likeFilm(film.id, token).subscribe(res => {
      this.filmLiked = true;
     // 
    })

    this.service.show(this.text).subscribe();
  }
}
