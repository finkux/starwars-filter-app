import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public characters: any[] = [];
  public isOpen: boolean = false;

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.filmsService.getCharacters().subscribe((data) => {
      console.log(data.results);
      this.characters = data.results;
    });
  }

  togglePanelChange($event: any) {
    console.log($event);
  }

}
