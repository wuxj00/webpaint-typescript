import { RectBox, GeoNodeOption } from '../interface/common';
import Node from './Node';

export default class GeoNode extends Node {
  public static readonly type: string = 'geo-node';
  private lng!: number;
  private lat!: number;
  
  constructor({ lng, lat, x, y, ...more }: GeoNodeOption) {
    super(more);
    this.setLngLat(lng, lat);
  }
  public getLngLat(): [number, number] {
    return [this.lng, this.lat];
  }
  public setLngLat(lng: number, lat: number) {
    this.lng = lng;
    this.lat = lat;
  }
}
