// requestAnimationFrame setTimeout nextTick
// const raf: any = (
//     typeof window !== 'undefined'
//     && (
//         (window.requestAnimationFrame && window.requestAnimationFrame.bind(window))
//         || (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window))
//         || window.mozRequestAnimationFrame
//         || window.webkitRequestAnimationFrame
//     )
// ) || function (func: any) {
//     setTimeout(func, 16);
// };

export function startAnims(cb: any) {
    return requestAnimationFrame(cb);
}

export function stopAnims(id: any) {
    cancelAnimationFrame(id);
}

