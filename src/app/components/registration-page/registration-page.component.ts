import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  loading = false;
  form!: FormGroup;

  submitted=false;

  constructor(
    private logicService: LogicService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  register(){
    this.loading = true;
    this.submitted = true;
    if(this.form.invalid){ return }

    const user = {
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.logicService.register(user).subscribe(res => {
      this.form.reset
      this.router.navigate([''])
      this.submitted = false;
      this.loading = false;
    })
  }

}
