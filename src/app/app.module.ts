import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilmDescriptionPageComponent } from './components/film-description-page/film-description-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FavoritesPageComponent } from './components/favorites-page/favorites-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationModule } from './components/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FilmDescriptionPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    FavoritesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
