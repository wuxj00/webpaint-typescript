import Entity from './Entity';
import { RectBox } from '../interface/common';

export default abstract class DisplayObject extends Entity {

  protected width: number = 0;
  protected height: number = 0;
  protected x: number = 0;
  protected y: number = 0;

  protected style?: any = {
    stroke: '#000',
    lineWidth: 1,
    textAlign: 'center',
    textVerticalAlign: 'top',
    fontSize: 14,
    fontFamily: '微软雅黑',
    textFill: '#000',
    blend: 'source-over',
  };

  private draggable: boolean = true;

  constructor({ x, y, width, style = {}, height, ...more}: any = {}) {
    super(more);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.style = Object.assign({}, this.style, style || {});
  }

  public abstract getBoundingRect(): RectBox;
  
  public getStyles(): any {
    return this.style;
  }
  public setStyle(name: string, style: any) {
    const styles = this.getStyles();
    style[name] = style;
  }

  public getStyle(name: string) {
    const styles = this.getStyles();
    return styles[name];
  }
  public abstract dispose(): void;
}
