import { Component, Input, ɵNgModuleTransitiveScopes } from '@angular/core';
import { Film } from 'src/app/models/movies.model';
import { DataService } from 'src/app/services/data.service';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-film-description-page',
  templateUrl: './film-description-page.component.html',
  styleUrls: ['./film-description-page.component.scss']
})
export class FilmDescriptionPageComponent {

  constructor(private logicService: LogicService,
    private dataService: DataService){}

  
  film: Film = {};

  async ngOnInit(): Promise<void> {
    let filmId = (await this.dataService.getData()).id
    if(!filmId) return;
    this.logicService.getFilm(filmId).subscribe(res => {
      this.film=res;
    })
  }

  likeFilm(film: Film){
    const token = this.logicService.token;
    if(!token || !film.id) return;
    this.logicService.likeFilm(film.id, token).subscribe(res => {
     // 
    })
  }
}
