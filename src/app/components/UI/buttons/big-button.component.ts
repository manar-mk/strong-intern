import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-big-button',
  template: `
      <button [ngStyle]="{'background-color': bgColor}">
          <p>{{text | uppercase}}</p>
          <img src="{{'assets/icons/movie-cover/buttons/' + icon}}" alt="{{icon}}"/>
      </button>
  `,
  styles: [`
    button {
      height: 50px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      padding-left: 24px;
      padding-right: 21px;
      gap: 20px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.8;
    }

    p {
      font-family: 'Montserrat', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #FFFFFF;
    }
  `]
})
export class BigButtonComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() bgColor!: string;
}
