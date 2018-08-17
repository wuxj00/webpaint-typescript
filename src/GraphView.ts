import { Node, Edge } from './entities/';

import zrender from 'zrender';

const pic =  require('@/assets/images/icon.jpg');
const { decodeGeoHash, encodeGeoHash } =require('@/utils/geohash');
console.log(decodeGeoHash, encodeGeoHash);

class GraphView {
  constructor(option: any) {
    // const node = new Node({});
    // node.render();

    console.log(encodeGeoHash(30, 103));
    console.log(encodeGeoHash(31, 103));
    console.log(encodeGeoHash(30, 104));
    console.log(encodeGeoHash(31, 104000015));
    // 1、获取点击事件的geopoint
    // 2、上下扩展矩形捕捉，得到左下-右上的geohash键值
    // 3、从存储geohash表中获取渲染视图模型列表，
    // 4、建立临时绘图模型，然后将筛选的视图模型，绘制一遍，然后根据图片像素值，获取最上层视图对象；
    // 4-1、如果全部是节点对象，则可以通过层级比较，但是，如果是边模型对象，则可能出现曲线等问题；
    // 4-2、边模型要单独存储，边模型是存存储区间，而节点是存储单个节点；

    console.log('90,180', encodeGeoHash(90, 180));
    console.log('-90,-180', encodeGeoHash(-90, -180));



    const zr = zrender.init(document.getElementById('map') as HTMLDivElement);
    const img = new Image();
    img.src = pic;
    const circle = new zrender.Circle({
      shape: {
        cx: 150,
        cy: 50,
        r: 40,
      },
      style: {
        fill: 'none',
        stroke: '#F00',
      },
    });
    const image = new zrender.Image({
      draggable: true,
      style: {
        x: 300,
        y: 300,
        width: 150,
        height: 150,
        image: img,
      },
    });
    const elem = document.getElementById('map') as HTMLCanvasElement;
    const ctx = elem.getContext('2d');
    const paniter = zr.painter;
    paniter._doPaintEl(circle, {
      ctx,
    }, true, {});
    setTimeout(() => {
      paniter._doPaintEl(image, {
        ctx,
      }, true, {});
    }, 500);
  }
}

export {
  Node,
  Edge,
  GraphView,
};
