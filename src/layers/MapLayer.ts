import Layer from './Layer';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as proj from 'ol/proj';


export default class MapLayer extends Layer {

  private map!: Map;

  constructor(option: any = {}) {
    const mixOpt = {...option, name: 'map' };
    super(mixOpt);
    this.createView();
  }
  public render(): void {
    // empty
  }

  public getView() {
    return this.map.getViewport() as HTMLElement;
  }

  public clear() {
    this.map.getView();
  }

  public getGisMap(): Map {
    return this.map;
  }
  public createView() {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    this.map = map;
    super.createView();
  }
  public getCoordinateFromPixel(pixel: [number, number]) {
    return this.map.getCoordinateFromPixel(pixel);
  }
  public getPixelFromCoordinate(coord: [number, number]) {
    return this.map.getPixelFromCoordinate(coord);
  }
  public getProjectionCode(): string {
    const view = this.map.getView();
    return view.getProjection().getCode();
  }
  public getPixelFromLngLat(lnglat: [number, number]) {
    const code = this.getProjectionCode();
    console.log(proj);
    const coord = proj.fromLonLat(lnglat, code);
    return this.map.getPixelFromCoordinate(coord);
  }

  public getLngLatFromPixel(pixel: [number, number]) {
    const code = this.getProjectionCode();
    const coord = this.map.getCoordinateFromPixel(pixel);
    return proj.toLonLat(coord, code);
  }
  private createOlMap() {
    // empty
  }

}
