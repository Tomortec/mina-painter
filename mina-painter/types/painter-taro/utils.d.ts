import { IView } from './index';
export declare function setStringPrototype(screenK: any, scale: any): void;
/**
 * 判断一个 object 是否为 空
 * @param {object} object
 */
export declare function isEmpty(object: any): boolean;
export declare function isInView(x: any, y: any, rect: any): boolean;
export declare function isInDelete(x: any, y: any, block: any): boolean;
export declare function isInScale(x: any, y: any, block: any): boolean;
export declare function isNeedRefresh(newVal: any, oldVal: any, dirty: any): boolean;
export declare function getBox(rect: any, type: any, customActionStyle: any): IView;
export declare function getScaleIcon(rect: any, type: any, customActionStyle: any): IView;
export declare function getDeleteIcon(rect: any, customActionStyle: any): IView;
