import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/services/films.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public search = new FormControl('');

  filmsItem: string[] = [];
  vehiclesItem: string[] = [];

  public characters: any = [];
  public isOpen: boolean = false;
  public films: any = [];

  public sizePages: number = 0;
  public resultsPage: number = 0;
  public nextUrl: string = '';
  public prevUrl: string = '';

  constructor(
    private filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }

  getCharacters(page: number): void {
    this.filmsService.getCharacters(page).subscribe(data => {
      console.log(data);
      console.log(data.results);

      this.setData(data);
    });
  }

  togglePanelChange($event: any, index: number) {
    console.log($event);
    console.log(index + 1);
    let id: number = index + 1;
  }

  nextPage() {
    this.filmsService.getCharactersPath(this.nextUrl).subscribe(data => {
      this.setData(data);
    });
  }

  prevPage() {
    this.filmsService.getCharactersPath(this.prevUrl).subscribe(data => {
      this.setData(data);
    });
  }

  goTo(page: number) {
    this.getCharacters(page);
  }

  setData(data: any): void {
    this.nextUrl = data.next;
    this.prevUrl = data.previous;
    this.characters = data.results;
  }

  searchTerm(): void {
    if (this.search.value.length > 1) {
      this.filmsService.searchCharacter(this.search.value).subscribe(data => {
        this.characters = data.results;
        console.log(data.results);
      })
    } else {
      this.getCharacters(1);
    }

  }
}
