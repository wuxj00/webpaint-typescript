
import { DisplayObject } from '../model/';

export interface RectBox {
  x: number;
  y: number;
  width: number;
  height: number;
  [key: string]: any;
}


export interface VectorTreeItem {
  'rt': VectorTreeItem | null;
  'rb': VectorTreeItem | null;
  'lt': VectorTreeItem | null;
  'lb': VectorTreeItem | null;

  [key: string]: any;

  value: DisplayObject;
}

export interface ImageModel {
  id: string;
  src: string;
  [key: string]: any;
}
