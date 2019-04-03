import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StationsTableComponent } from './stations-table/stations-table.component';
import { AllStationsComponent } from './all-stations/all-stations.component';
import { StationsNearComponent } from './stations-near/stations-near.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StationsTableComponent,
    AllStationsComponent,
    StationsNearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
