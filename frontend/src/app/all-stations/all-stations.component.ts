import { Component, OnInit } from '@angular/core';
import {Station} from "../models/Station";
import {ApiService} from "../api.service";
import {MapsAPILoader} from "@agm/core";
declare var google;
@Component({
  selector: 'app-all-stations',
  templateUrl: './all-stations.component.html',
  styleUrls: ['./all-stations.component.scss']
})
export class AllStationsComponent implements OnInit {

  stations: Station[] = [];


  constructor(private api: ApiService, private maps: MapsAPILoader) { }

  ngOnInit() {
    this.api.getAllStations().subscribe((stations) => {
      this.stations = stations;
    });
    // let google;




  }


}

