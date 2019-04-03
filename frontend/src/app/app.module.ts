import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {ApiService} from "./api.service";
import {Form, FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
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
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
