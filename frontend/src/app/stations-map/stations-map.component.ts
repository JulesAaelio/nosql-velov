import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Station} from "../models/Station";
import {MapsAPILoader} from "@agm/core";
import {Place} from "../models/Place";
declare var google;


@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.scss']
})
export class StationsMapComponent implements OnInit, OnChanges {

  constructor(private maps: MapsAPILoader) { }

  mapcenter = {
    lat: 0,
    lng: 0
  };
  @Input()
  stations: Station[];

  @Input()
  place: Place = null;

  ngOnInit() {
    this.ngOnChanges(null);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.place != null) {
        console.log('updating');
        this.mapcenter.lat = this.place.geometry.coordinates[1];
        this.mapcenter.lng = this.place.geometry.coordinates[0];
        console.log(this.mapcenter);
      } else {
        console.log("center");
        this.maps.load().then(() => {
          new google.maps.Geocoder().geocode({
            address: `27 RUE RAOUL SERVANT, 69007 LYON, FRANCE`
          }, (results, status) => {
            if (results) {
              this.mapcenter.lat = results[0].geometry.location.lat();
              this.mapcenter.lng = results[0].geometry.location.lng();
            }
          });
        })
      }
  }



  getImage(station) {
    let color;
    switch (station.properties.availability) {
      case 'Vert':
        color = 'green';
        break;
      case 'Rouge':
        color = 'red';
        break;
      case 'Bleu':
        color = 'blue';
        break;
      case 'Gris':
        color = 'red';
        break;
      case 'Orange':
      default:
        color = 'orange';
    }
    return `assets/pin-station-${color}.png`
  }

}
