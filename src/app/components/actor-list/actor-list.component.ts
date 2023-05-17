import {Component, Input} from '@angular/core';
import {Actor} from "../../models/MovieModels";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styles: [`
    .actor-list-text {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
    }

    .actor-cards {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 72px;
    }
  `]
})
export class ActorListComponent {
  @Input() actors!: Actor[];
  @Input() pageLimit!: number;
  @Input() actorsLoading!: boolean;

  actorsPage = 5;

  actorPageHandle(show: boolean) {
    if (show) {
      this.actorsPage += this.pageLimit;
      return;
    }
    this.actorsPage -= this.pageLimit;
  }
}
