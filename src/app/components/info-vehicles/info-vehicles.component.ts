import { Component, Input, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-info-vehicles',
  templateUrl: './info-vehicles.component.html',
  styleUrls: ['./info-vehicles.component.scss']
})
export class InfoVehiclesComponent implements OnInit {
  @Input() vehicles: string[] = [];

  public infoVehicles: any[] = [];

  constructor(
    private filmService: FilmsService
  ) { }

  ngOnInit(): void {
    this.getVehiclesInfo();
  }

  getVehiclesInfo(): void {
    this.vehicles.forEach(item => {
      this.filmService.getFilm(item).subscribe((data) => {
        this.infoVehicles.push(data);
      })
    });

  }

}
