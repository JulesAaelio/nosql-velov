import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Place} from "./models/Place";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchPlaces(search:string) {
    return this.http.get<Place[]>(`${environment.api_endpoint}/places?search=${search}`);
  }
}
