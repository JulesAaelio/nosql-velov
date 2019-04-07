import {Geometry} from "./Geometry";
import {StationProperties} from "./StationProperties";

export class Station {
  _id: string;
  properties: StationProperties;
  geometry: Geometry;
}
