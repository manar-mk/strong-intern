import { Component } from '@angular/core';
import { Film } from 'src/app/models/movies.model';
import { DataService } from 'src/app/services/data.service';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent {
  films: Film[] = []

  constructor(private logicService: LogicService,
    private dataService: DataService){}

    ngOnInit(): void {
      const token = this.logicService.token
      if(!token) return;
      this.logicService.getLikedFilms(token).subscribe(res => {
        this.films = res;
      })
    }
  
    getFilm(film: Film){
      this.dataService.myMethod(film);
    }
}
