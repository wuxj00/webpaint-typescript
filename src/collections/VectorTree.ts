import { RectBox, VectorTreeItem, Point } from '../interface/common';
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

  public forEach(cb: Function, tree: any = this.root) {
    if (tree === null) {
      return;
    }    
    cb(tree.value);
    this.forEach(cb, tree.rt);
    this.forEach(cb, tree.rb);
    this.forEach(cb, tree.lt);
    this.forEach(cb, tree.lb);
  }

  public getLeftTopList(p: Point, treeItem: VectorTreeItem | null = this.root) {
    let storeList = [];
    if (treeItem === null) {
      return null;
    }
    const bbox = treeItem.value.getBoundingRect();
    if (bbox.x < p.x &&
      bbox.y < p.y &&
      bbox.x + bbox.width > p.x &&
      bbox.y + bbox.height > p.y) {
      storeList.push(treeItem.value); 
    }
    if (bbox.y > p.y) {
      return null;
    }
    
    const lt: any = this.getLeftTopList(p, treeItem.lt) || [];
    const lb: any = this.getLeftTopList(p, treeItem.lb) || [];
    const rb: any = this.getLeftTopList(p, treeItem.rb) || [];
    const rt: any = this.getLeftTopList(p, treeItem.rt) || [];

    return storeList.concat(lt).concat(lb).concat(rb).concat(rt);
  }

  private inserNode(shape: DisplayObject, pNode: VectorTreeItem): GeoTree {
    const node: DisplayObject = pNode.value;

    const rbox: RectBox = shape.getBoundingRect();
    const crbox: RectBox = node.getBoundingRect();

    const rl: string = rbox.x >= crbox.x ? 'r' : 'l';
    const tb: string = rbox.y >= crbox.y ? 'b' : 't';
    const key: string = rl + tb;

    const wrapNode: any = {
      value: shape,
      rb: null,
      rt: null,
      lb: null,
      lt: null,
    };
    const nextNode = pNode[key];
    if (nextNode === null) {
      pNode[key] = wrapNode;
      return this;
    }
    const nextBox = nextNode.value.getBoundingRect();
    const rlNext: string = nextBox.x >= rbox.x ? 'r' : 'l';
    const tbNext: string = nextBox.y >= rbox.y ? 'b' : 't';
    const keyNext: string = rlNext + tbNext;
    if (key === keyNext) {
      pNode[key] = wrapNode;
      wrapNode[key] = nextNode;
      return this;
    }
    return this.inserNode(shape, nextNode);
  }
}

  //       |
  //       |
  //       |
  //  -----|--------
  //       |
  //       |
  //       |
