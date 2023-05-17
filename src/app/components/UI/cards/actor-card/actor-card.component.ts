import {Component, Input} from '@angular/core';
import {Actor} from "../../../../models/MovieModels";

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent {
  @Input() actor!: Actor;
}
