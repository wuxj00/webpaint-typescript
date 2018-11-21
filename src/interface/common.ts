
import { DisplayObject } from '../model/';
import { GraphView } from '@/GraphView';

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

export interface EdgeOption {
  source: string;
  target: string;
  [key: string]: any;
}


export interface Point {
  x: number;
  y: number;
}

export interface GraphViewParam {
  target: string | HTMLElement;
  [key: string]: any;
}

export interface LayerParam {
  name: string;
  map?: boolean;
  target: HTMLElement;
  [key: string]: any;
}

