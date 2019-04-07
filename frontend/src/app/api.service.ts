import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Place} from "./models/Place";
import {Station} from "./models/Station";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchPlaces(search:string) {
    return this.http.get<Place[]>(`${environment.api_endpoint}/places?search=${search}`);
  }

  getAllStations() { 
    return this.http.get<Station[]>(`${environment.api_endpoint}/stations`)
  }

  getStationNearPlace(place) {
    return this.http.get<Station[]>(`${environment.api_endpoint}/stations/near/${place.properties.id}`)

  }
}
