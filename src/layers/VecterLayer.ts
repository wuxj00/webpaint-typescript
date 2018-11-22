import Layer from './Layer';
import { createElement } from '../utils/dom';
import zrender from 'zrender';

export default class VectorLayer extends Layer {

  private painter!: (obj: any, ctx: CanvasRenderingContext2D) => void;

  constructor(option: any = {}) {
    const mixOpt = {...option, name: 'vector' };
    super(mixOpt);
    this.createView();
    this.initPainter();
  }

  public createView() {
    const canvas = createElement('CANVAS') as HTMLCanvasElement;
    const target = this.getTarget();
    const bbox = target.getBoundingClientRect();
    canvas.width =  bbox.width;
    canvas.height = bbox.height;
    this.setView(canvas);
    super.createView();
  }

  public getPainter() {
    return this.painter;
  }
  public render(): void {
    // empty
  }
  private initPainter() {
    const elem = this.getView() as HTMLCanvasElement;
    const zr = zrender.init(elem);
    const ctx = elem.getContext('2d') as CanvasRenderingContext2D;

    this.painter = (obj: any) => {
      zr.painter._doPaintEl(obj, {
        ctx,
      }, true, {});
    };
  }
}
