import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Station} from "../models/Station";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-stations-table',
  templateUrl: './stations-table.component.html',
  styleUrls: ['./stations-table.component.scss']
})
export class StationsTableComponent implements OnInit, OnChanges {

  @Input()
  stations: Station[] = [];

  @Input()
  displayDistance: boolean;

  displayedColumns: string[] = ['properties.number', 'properties.name', 'properties.available_bike_stands', 'properties.available_bikes'];

  tableDataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    if(this.displayDistance) {
      this.displayedColumns.push('distance')
    }
  }

  ngOnChanges(): void {
    this.tableDataSource = new MatTableDataSource(this.stations);
    this.tableDataSource.sortingDataAccessor = (item, property) => {
      const keys = property.split('.').reverse();
      return this.getProperty(item, keys);
    };
    this.tableDataSource.sort = this.sort;



  }

  getProperty(target, keys) {
    let key = keys.pop();
    let newtarget = target[key];
    if(keys.length === 0) { return newtarget; }

    return this.getProperty(newtarget, keys);
  }
}
