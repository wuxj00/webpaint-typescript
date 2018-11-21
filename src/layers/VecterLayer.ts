import Layer from './Layer';
import { createElement } from '../utils/dom';

export default class VectorLayer extends Layer {

  constructor(option: any = {}) {
    const mixOpt = {...option, name: 'vector' };
    super(mixOpt);
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
  public render(): void {
    // empty
  }

}
