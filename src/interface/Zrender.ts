export interface ZImageOption {
  style: {
    x: number;
    y: number;
    [key: string]: any;
    width: number;
    height: number;
    image: HTMLImageElement;
  };
  draggable: boolean;
}
