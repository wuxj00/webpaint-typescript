import { RectBox } from '../interface/common';
import { join } from 'path';

const mathMin = Math.min;
const mathMax = Math.max;
export function mergeRect(obj1: any, obj2: any) {
  if (!obj1 && !obj2) {
    return null;
  }
  if (!obj1) {
    return obj2.getBoundingRect();
  }  
  if (!obj2) {
    return obj1.getBoundingRect();
  }

  const rect1 = obj1.getBoundingRect();
  const rect2 = obj2.getBoundingRect();

  const x = mathMin(rect1.x, rect2.x);
  var y = mathMin(rect1.y, rect2.y);

  const width = mathMax(
    rect1.x + rect1.width,
    rect2.x + rect2.width
  ) - x;
  const height = mathMax(
    rect1.y + rect1.height,
    rect2.y + rect2.height
  ) - y;
  return {
    x, y, width, height,
  };
}