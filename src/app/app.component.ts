import { Component } from '@angular/core';
import { LogicService } from './services/logic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcatalog';

  constructor(
    public logicService: LogicService,
    private router: Router) {}

  logout($event: any) {
    event?.preventDefault()
    this.logicService.logout()
    this.router.navigate(['login'])
  }
}
