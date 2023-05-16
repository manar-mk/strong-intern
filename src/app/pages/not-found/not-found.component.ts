import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="center center-y not-found">
  <p class="not-found-text">No such page</p>
  <a routerLink="/">Go home</a>
</div>`,
  styles: [
    `.not-found {
      height: 80vh;
      background-color: black;
      display: flex;
      flex-direction: column;
    }

    .not-found-text {
      font-size: 50px;
      color: white;
    }

    a {
      margin-top: 20px;
      font-size: 30px;
      color: crimson;
    }`]
})
export class NotFoundComponent {

}
