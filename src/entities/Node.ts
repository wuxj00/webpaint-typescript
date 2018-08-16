import { DisplayObject, GeoPoint, Point, Icon, Label } from '../model/';
import { Image } from '../painter/';
import { Image as ZImage, Text } from 'zrender';

export default class Node extends DisplayObject {
  private geoPoint?: GeoPoint;
  private point?: Point;
  private icon?: Icon;
  private label?: Text;

  constructor(option: any = {}) {
    const { point, geoPoint, icon, label, ...others } = option;
    super(others);
    if (geoPoint) {
      this.geoPoint = new GeoPoint(geoPoint);
    }
    if ( point) {
      this.point = new Point(point);
    }
    if (icon) {
      this.icon = new Icon(icon);
    }
    if (label) {
      this.label = new Text(label);
    }
  }
  public getPoint(): any {
    return this.point;
  }
  public setPoint(p: any): void {
    if (p instanceof Point || p instanceof Object) {
      this.point = new Point(p);
    }
  }
  public getGeoPoint(): GeoPoint | void {
    return this.geoPoint;
  }
  public setGeoPoint(p: any): void {
    if (p instanceof GeoPoint || p instanceof Object) {
      this.geoPoint = new GeoPoint(p);
    }
  }
  public getLabel(): Text | void {
    return this.label;
  }
  public setLabel(label: any) {
    if (label instanceof Object) {
      this.label = new Text(label);
    }
  }
  public getIcon(): Icon | void {
    return this.icon;
  }
  public setIcon(icon: any) {
    if (icon instanceof Icon || icon instanceof Object) {
      this.icon = new Icon(icon);
    }
  }

  public render() {
    const elem: HTMLCanvasElement = document.getElementById('map') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = elem.getContext('2d') as CanvasRenderingContext2D;
    Image.render(ctx, {
      cx: 200,
      cy: 200,
      r: 40,
    });
  }
  public dispose() {
    // empty
  }
}
