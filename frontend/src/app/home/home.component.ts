import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Station} from "../models/Station";
import {Place} from "../models/Place";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  stations: Station[] = [];
  places: Place[] = [];
  searchControl = new FormControl();

  ngOnInit() {
    this.api.getAllStations().subscribe((stations) => {
      this.stations = stations;
    });

    this.searchControl.valueChanges.subscribe((value) => {
      this.filterPlaces(value)
    })
  }

  filterPlaces(search) {
    this.api.searchPlaces(search).subscribe((places) => {
      this.places = places;
    });
  }

  onOptionSelected(event) {
    console.log(event.option.value);
    this.api.getStationNearPlace(event.option.value).subscribe(stations => {
      this.stations = stations;
    })
  }



  displayFn(place?: Place): string | undefined {
    return place ? `${place.properties.nom} - ${place.properties.adresse}, ${place.properties.codepostal} ${place.properties.commune}` : undefined;
  }



}
