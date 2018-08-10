import { Entity } from '../model/';

export default abstract class Layer extends Entity {
  private level: number;
  private readonly name: string;
  private readonly views: HTMLCanvasElement;
  private width: number;
  private height: number;

  constructor(option: any = {}) {
    const { name, level, width, height, ...others } = option;
    super(others);
    this.name = name || '';
    this.level = level || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.views = this.initElementView();
  }

  public getWidth(): number {
    return this.width;
  }
  public setWidth(width: number) {
    this.width = width;
    const elem = this.getView();
    elem.width = width;
  }
  public getHeight(): number {
    return this.height;
  }
  public setHeight(height: number) {
    this.height = height;
    const elem = this.getView();
    elem.height = height;
  }

  public getView(): HTMLCanvasElement {
    return this.views;
  }
  public getContext(): CanvasRenderingContext2D | null {
    const view = this.getView();
    return view.getContext('2d');
  }

  public clear(): void {
    const ctx = this.getContext();
    if (ctx !== null) {
      ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  public abstract render(): void;

  private initElementView(): HTMLCanvasElement {
    const elem = document.createElement('CANVASE') as HTMLCanvasElement;
    elem.setAttribute('name', this.name);
    elem.setAttribute('height', '100%');
    elem.setAttribute('width', '100%');
    elem.height = this.getWidth();
    elem.width = this.getHeight();
    return elem;
  }
}
