import { Entity } from '../model/';
import { LayerParam } from '../interface/common';

export default abstract class Layer extends Entity {
  private level: number = 0;
  private readonly name: string;
  private views!: HTMLElement;
  private target: HTMLElement;

  constructor({ name, target, ...more }: LayerParam) {
    super(more);
    this.name = name;
    this.target = target;
  }
  public getTarget() {
    return this.target;
  }
  public getView(): HTMLElement {
    return this.views;
  }
  public setView(view: HTMLElement) {
    this.views = view;
  }
  public clear(): void {
    const views = this.getView();
    if (views instanceof HTMLCanvasElement) {
      const canvas = views as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const bbox = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, bbox.width, bbox.height);
    }
  }

  public abstract render(): void;

  public getContext(): CanvasRenderingContext2D {
    const view = this.getView() as HTMLCanvasElement;
    return view.getContext('2d') as CanvasRenderingContext2D;
  }

  public createView(): void {
    // rewirte
    const view = this.getView();
    view.setAttribute('layer-name', this.name);
    view.setAttribute('class', 'layer');
    if (this.name !== 'map') {
      const tgtElem = this.getTarget();
      tgtElem.appendChild(view);
    }
  }
}
