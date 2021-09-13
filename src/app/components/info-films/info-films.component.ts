import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-info-films',
  templateUrl: './info-films.component.html',
  styleUrls: ['./info-films.component.scss']
})
export class InfoFilmsComponent implements OnInit {
  @Input() films: string[] = [];

  public infoFilms: any[] = [];

  constructor(
    private filmService: FilmsService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.getCharFilms();
  }

  getCharFilms(): void {
    this.films.forEach(item => {
      this.filmService.getFilm(item).subscribe((data) => {
        this.infoFilms.push(data);
      })
    });
  }

}
