import { DisplayObject, GeoPoint, Point, Icon, Label } from '../model/';

export default class Node extends DisplayObject {
  private geoPoint: GeoPoint;
  private point: Point;
  private icon: Icon;
  private label: Label;

  constructor(option: any = {}) {
    const { point, geoPoint, icon, label, ...others } = option;
    super(others);
    this.geoPoint = new GeoPoint(geoPoint);
    this.point = new Point(point);
    this.icon = new Icon(icon);
    this.label = new Label(label);
  }
  public getPoint(): Point {
    return this.point;
  }
  public setPoint(p: any): void {
    if (p as Point || p as object) {
      this.point = new Point(p);
    }
  }
  public getGeoPoint(): GeoPoint {
    return this.geoPoint;
  }
  public setGeoPoint(p: any): void {
    if (p as GeoPoint || p as object) {
      this.geoPoint = new GeoPoint(p);
    }
  }
  public getLabel(): Label {
    return this.label;
  }
  public setLabel(label: any) {
    if (label as Label || label as object) {
      this.label = new Label(label);
    }
  }
  public getIcon(): Icon {
    return this.icon;
  }
  public setIcon(icon: any) {
    if (icon as Icon || icon as object) {
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
