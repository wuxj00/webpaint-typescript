# vue-typescript-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
"# webpaint-typescript"


### geohash
  console.log(encodeGeoHash(30, 103));
  1、获取点击事件的geopoint
  2、上下扩展矩形捕捉，得到左下-右上的geohash键值
  3、从存储geohash表中获取渲染视图模型列表，
  4、建立临时绘图模型，然后将筛选的视图模型，绘制一遍，然后根据图片像素值，获取最上层视图对象；
  4-1、如果全部是节点对象，则可以通过层级比较，但是，如果是边模型对象，则可能出现曲线等问题；
  4-2、边模型要单独存储，边模型是存存储区间，而节点是存储单个节点；

  console.log('90,180', encodeGeoHash(90, 180));
  console.log('-90,-180', encodeGeoHash(-90, -180));
