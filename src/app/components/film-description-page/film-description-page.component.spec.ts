import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDescriptionPageComponent } from './film-description-page.component';

describe('FilmDescriptionPageComponent', () => {
  let component: FilmDescriptionPageComponent;
  let fixture: ComponentFixture<FilmDescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDescriptionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
