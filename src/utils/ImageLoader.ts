import { ImageModel } from '../interface/common';
import ImageMgr from '../plugins/ImageMgr';

const imageMgr = new ImageMgr();

export async function ImageLoader(arr: ImageModel[]) {
  return Promise.all( arr.map((img) => {
    return new Promise((resovle, reject) => {
      const image = new Image();
      image.onload = () => {
        imageMgr.add(img.id, image);
        resovle(image);
      };
      image.onerror = () => {
        reject(img.id);
      };
      image.src = img.src;
    });
  })).then(() => {
    return imageMgr;
  });
}
