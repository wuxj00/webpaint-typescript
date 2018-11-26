import { DisplayObject, Line, Icon, Label } from '../model/';
import { EdgeOption, Point, RectBox } from '../interface/common';
import { mergeRect } from '../utils/common';
import { dm } from '../utils/DataModelHelper';

export default class Edge extends DisplayObject {

  public static readonly type: string = 'edge';

  private source!: string;
  private target!: string;
  private line?: any;

  constructor({ source, target, ...more }: EdgeOption) {
    super(more);
    this.source = source;
    this.target = target;
    this.initEntities();
  }
  public initEntities() {
    const source = dm.get(this.source);
    const target = dm.get(this.target);
    if (!source && !target) {
      return;
    }

    const sp: Point = source.getPosition();
    const ep: Point = target.getPosition();

    this.line = new Line({
     x1: sp.x,
     y1: sp.y,
     x2: ep.x,
     y2: ep.y,
     style: this.style,
    });
  }

  public getBoundingRect(): RectBox {
    return this.line.getBoundingRect();
  }
  public render(painter: any, ctx: CanvasRenderingContext2D): void {
    // empty
    this.line && painter(this.line.getEntity(), ctx);
  }
  public dispose(): void {
    // empty
  }
}
