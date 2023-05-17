import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-button',
  template: `
      <button [ngStyle]="{'background-color': bgColor}">
          <p>{{text | titlecase}}</p>
      </button>
  `,
  styles: [`
    button {
      height: 40px;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 25px;
      padding-right: 25px;
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
export class SmallButtonComponent {
  @Input() text!: string;
  @Input() bgColor!: string;
}
