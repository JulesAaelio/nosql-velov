import { Component, OnInit } from '@angular/core';
import {Station} from "../models/Station";
import {ApiService} from "../api.service";
import {MapsAPILoader} from "@agm/core";
import {Place} from "../models/Place";
import {Geometry} from "../models/Geometry";
declare var google;
@Component({
  selector: 'app-all-stations',
  templateUrl: './all-stations.component.html',
  styleUrls: ['./all-stations.component.scss']
})
export class AllStationsComponent implements OnInit {

  stations: Station[] = [];
  place = null;


  constructor(private api: ApiService, private maps: MapsAPILoader) { }

  ngOnInit() {
    this.api.getAllStations().subscribe((stations) => {
      this.stations = stations;
    });
    navigator.geolocation.getCurrentPosition((position) => {
      const place = new Place();
      place.geometry = new Geometry();
      place.geometry.coordinates = [position.coords.longitude, position.coords.latitude];
      this.place = place;
    });


  }


}

