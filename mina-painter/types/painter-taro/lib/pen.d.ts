export default class Painter {
    constructor(ctx: any, data: any);
    ctx: any;
    data: any;
    globalWidth: {};
    globalHeight: {};
    isMoving: boolean;
    movingCache: {};
    paint(callback?: (callbackInfo: any) => void, isMoving?: boolean, movingCache?: {}): void;
    style: {
        width: any;
        height: any;
    } | undefined;
    _background(): void;
    _drawAbsolute(view: any): void;
    _border({ borderRadius, width, height, borderWidth, borderStyle }: {
        borderRadius?: number | undefined;
        width: any;
        height: any;
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
    }): void;
    /**
     * 根据 borderRadius 进行裁减
     */
    _doClip(borderRadius: any, width: any, height: any, borderStyle: any): void;
    /**
     * 画边框
     */
    _doBorder(view: any, width: any, height: any): void;
    _preProcess(view: any, notClip: any): {
        width: number;
        height: any;
        x: any;
        y: any;
        extra: {
            lines: number;
            lineHeight: any;
            textArray: any;
            linesArray: number[];
        } | undefined;
    } | undefined;
    _doPaddings(view: any): number[];
    _doBackground(view: any): void;
    _drawQRCode(view: any): void;
    _drawAbsImage(view: any): void;
    callbackInfo: {};
    _fillAbsText(view: any): void;
    _drawAbsRect(view: any): void;
    _doShadow(view: any): void;
    _getAngle(angle: any): number;
}
