import Entity from './Entity';

export default class GeoPoint extends Entity {
  private Lng?: number | undefined;
  private Lat?: number | undefined;
  get lng(): number | undefined {
    return this.Lng;
  }

  set lng(value: number | undefined) {
    this.Lng = value;
  }

  get lat(): number | undefined {
    return this.Lat;
  }

  set lat(value: number | undefined) {
    this.Lat = value;
  }
  constructor(option: any = {}) {
    super(option);
    const { lng, lat } = option;
    this.Lat = lat;
    this.Lng = lng;
  }
}
