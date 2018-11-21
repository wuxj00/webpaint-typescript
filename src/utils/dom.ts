import { ElMain } from 'element-ui/types/main';

export function createElement(tag: string): HTMLElement {
  const elem: HTMLElement = document.createElement(tag);
  return elem;
}
