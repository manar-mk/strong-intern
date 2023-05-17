import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-medium-button',
  template: `
      <button (click)="handleButtonClick()" [ngStyle]="{'background-color': bgColor}">
          <p>{{text | uppercase}}</p>
          <img src="{{'assets/icons/movie-cover/buttons/' + icon}}" alt="{{icon}}"/>
      </button>
  `,
  styles: [`
    button {
      height: 40px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      padding-left: 28px;
      padding-right: 20px;
      gap: 11px;
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
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
    }
  `]
})
export class MediumButtonComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() bgColor!: string;
  @Output() show = new EventEmitter();

  handleButtonClick() {
    switch (this.text) {
      case 'Show More':
        this.show.emit(true);
        break;
      case 'Show Less':
        this.show.emit(false);
    }
  }
}
