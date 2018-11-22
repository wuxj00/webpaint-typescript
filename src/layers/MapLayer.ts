import Layer from './Layer';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

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
  private createOlMap() {
    // empty
  }

}
