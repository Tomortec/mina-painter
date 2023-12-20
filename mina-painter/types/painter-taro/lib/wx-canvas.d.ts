export default class WxCanvas {
    constructor(type: any, ctx: any, canvasId: any, isNew: any, canvasNode: any);
    ctx: any;
    type: any;
    canvasId: any;
    canvasNode: any;
    stepList: any[];
    canvasPrototype: {};
    set width(arg: any);
    get width(): any;
    set height(arg: any);
    get height(): any;
    set lineWidth(arg: any);
    get lineWidth(): any;
    set lineCap(arg: any);
    get lineCap(): any;
    set lineJoin(arg: any);
    get lineJoin(): any;
    set miterLimit(arg: any);
    get miterLimit(): any;
    set lineDashOffset(arg: any);
    get lineDashOffset(): any;
    set font(arg: any);
    get font(): any;
    set textAlign(arg: any);
    get textAlign(): any;
    set textBaseline(arg: any);
    get textBaseline(): any;
    set fillStyle(arg: any);
    get fillStyle(): any;
    set strokeStyle(arg: any);
    get strokeStyle(): any;
    set globalAlpha(arg: any);
    get globalAlpha(): any;
    set globalCompositeOperation(arg: any);
    get globalCompositeOperation(): any;
    set shadowColor(arg: any);
    get shadowColor(): any;
    set shadowOffsetX(arg: any);
    get shadowOffsetX(): any;
    set shadowOffsetY(arg: any);
    get shadowOffsetY(): any;
    set shadowBlur(arg: any);
    get shadowBlur(): any;
    save(): void;
    restore(): void;
    setLineDash(...args: any[]): void;
    moveTo(...args: any[]): void;
    closePath(): void;
    lineTo(...args: any[]): void;
    quadraticCurveTo(...args: any[]): void;
    bezierCurveTo(...args: any[]): void;
    arcTo(...args: any[]): void;
    arc(...args: any[]): void;
    rect(...args: any[]): void;
    scale(...args: any[]): void;
    rotate(...args: any[]): void;
    translate(...args: any[]): void;
    transform(...args: any[]): void;
    setTransform(...args: any[]): void;
    clearRect(...args: any[]): void;
    fillRect(...args: any[]): void;
    strokeRect(...args: any[]): void;
    fillText(...args: any[]): void;
    strokeText(...args: any[]): void;
    beginPath(): void;
    fill(): void;
    stroke(): void;
    drawFocusIfNeeded(...args: any[]): void;
    clip(): void;
    isPointInPath(...args: any[]): void;
    drawImage(...args: any[]): void;
    addHitRegion(...args: any[]): void;
    removeHitRegion(...args: any[]): void;
    clearHitRegions(...args: any[]): void;
    putImageData(...args: any[]): void;
    getLineDash(): any;
    createLinearGradient(...args: any[]): any;
    createRadialGradient(...args: any[]): any;
    createPattern(...args: any[]): any;
    measureText(...args: any[]): any;
    createImageData(...args: any[]): any;
    getImageData(...args: any[]): any;
    draw(reserve: any, func: any): Promise<void>;
    implementMinaStep(step: any): void;
    implement2DStep(step: any): Promise<any>;
}
