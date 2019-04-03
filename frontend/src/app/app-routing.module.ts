import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllStationsComponent} from "./all-stations/all-stations.component";
import {StationsNearComponent} from "./stations-near/stations-near.component";

const routes: Routes = [
  { path:'', redirectTo:'stations/all', pathMatch: 'full'},
  { path:'stations/all', component: AllStationsComponent},
  { path:'stations/near', component: StationsNearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
