// requestAnimationFrame setTimeout nextTick


export function startAnims(cb: any) {
    return requestAnimationFrame(cb);
}

export function stopAnims(id: any) {
    cancelAnimationFrame(id);
}

