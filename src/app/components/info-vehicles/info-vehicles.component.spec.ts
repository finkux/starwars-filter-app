import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVehiclesComponent } from './info-vehicles.component';

describe('InfoVehiclesComponent', () => {
  let component: InfoVehiclesComponent;
  let fixture: ComponentFixture<InfoVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
