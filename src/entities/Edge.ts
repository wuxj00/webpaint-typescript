import { DisplayObject, Line, Icon, Label } from '../model/';
import { EdgeOption, NodePosition } from '../interface/common';
import { dm } from '../utils/DataModelHelper';

export default class Edge extends DisplayObject {

  private source!: string;
  private target!: string;
  private line?: any;

  constructor(option: EdgeOption) {
    super(option);
    const source = dm.get(option.source);    
    const target = dm.get(option.target);
    
    if (!source && !target) {
      return;
    }

    const sp: NodePosition = source.getPosition();
    const ep: NodePosition = target.getPosition();

    this.line = new Line({
     x1: sp.x,
     y1: sp.y,
     x2: ep.x,
     y2: ep.y,
     style: this.style, 
    })
    
  }

  public render(painter: any, ctx: CanvasRenderingContext2D): void {
    // empty
    this.line && painter(this.line.getEntity(), ctx);
  }
  public dispose(): void {
    // empty
  }
}
