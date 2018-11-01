import { RectBox, VectorTreeItem } from '../interface/common';
import { DisplayObject } from '../model/';

export default class GeoTree {

  private root: VectorTreeItem | null = null;

  constructor() {}

  public add(shape: DisplayObject): GeoTree {
    if (this.root === null) {
      this.root = {
        value: shape,
        rb: null,
        rt: null,
        lb: null,
        lt: null,
      };
      return this;
    }
    return this.inserNode(shape, this.root);
  }

  private inserNode(shape: DisplayObject, pNode: VectorTreeItem): GeoTree {
    const node: DisplayObject = pNode.value;

    const rbox: RectBox = shape.getRectBox();
    const crbox: RectBox = node.getRectBox();

    const rl: string = rbox.x > crbox.x ? 'r' : 'l';
    const tb: string = rbox.y > crbox.y ? 't' : 'b';
    const key: string = rl + tb;

    if (pNode[key] === null) {
      pNode[key] = {
        value: shape,
        rb: null,
        rt: null,
        lb: null,
        lt: null,
      };
      return this;
    }
    return this.inserNode(shape, pNode[key]);
  }
}

  //       |
  //       |
  //       |
  //  -----|--------
  //       |
  //       |
  //       |
