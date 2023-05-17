import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilmDescriptionPageComponent } from './components/film-description-page/film-description-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'film-description', component: FilmDescriptionPageComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }