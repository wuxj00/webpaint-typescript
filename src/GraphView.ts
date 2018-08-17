import { Node, Edge } from './entities/';
import zrender from 'zrender';

const pic =  require('@/assets/images/icon.jpg');


class GraphView {
  constructor(option: any) {
    // const node = new Node({});
    // node.render();
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
      }
    });
    const elem = document.getElementById('map') as HTMLCanvasElement;
    const ctx =elem.getContext('2d');
    const paniter = zr.painter;
    paniter._doPaintEl(circle, {
      ctx
    }, true, {});
    setTimeout(()=>{
      paniter._doPaintEl(image, {
        ctx
      }, true, {});
    }, 500);
  }
}

export {
  Node,
  Edge,
  GraphView,
};
