import { DisplayObject, GeoPoint, Point, Icon, Label } from '../model/';

export default class Node extends DisplayObject {
  private geoPoint?: GeoPoint;
  private point?: Point;
  private icon?: Icon;
  private label?: Label;

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
      this.label = new Label(label);
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
  public getLabel(): Label | void {
    return this.label;
  }
  public setLabel(label: any) {
    if (label instanceof Label || label instanceof Object) {
      this.label = new Label(label);
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
    // empty
  }
  public dispose() {
    // empty
  }
}
