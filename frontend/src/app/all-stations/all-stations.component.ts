import { Component, OnInit } from '@angular/core';
import {Station} from "../models/Station";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-all-stations',
  templateUrl: './all-stations.component.html',
  styleUrls: ['./all-stations.component.scss']
})
export class AllStationsComponent implements OnInit {

  stations: Station[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllStations().subscribe((stations) => {
      this.stations = stations;
    });
  }

}
