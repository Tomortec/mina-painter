import { CSSProperties } from 'react';
export interface IView {
    type?: 'rect' | 'text' | 'image' | 'qrcode';
    text?: string;
    url?: string;
    id?: string;
    /** 事实上painter中view的css属性并不完全与CSSProperties一致。 */
    /** 有一些属性painter并不支持，而当你需要开启一些“高级”能力时，属性的使用方式也与css规范不一致。 */
    /** 具体的区别我们将在下方对应的view介绍中详细讲解，在这里使用CSSProperties仅仅是为了让你享受代码提示 */
    css: CSSProperties | any;
    content?: string;
    rect?: {
        left: number;
        top: number;
        right: number;
        bottom: number;
        x: number;
        y: number;
        minWidth?: number;
    };
}
interface IPalette {
    background?: string;
    width: string;
    height: string;
    borderRadius?: string;
    views: Array<IView>;
}
interface IProps {
    customStyle?: string;
    customActionStyle?: {
        border?: {
            borderColor: string;
        };
        scale?: {
            textIcon: string;
            imageIcon: string;
        };
        delete?: {
            icon: string;
        };
    };
    palette?: IPalette;
    dancePalette?: IPalette;
    scaleRatio?: number;
    widthPixels?: number;
    dirty?: boolean;
    LRU?: boolean;
    action?: {
        view: IView;
    };
    disableAction?: boolean;
    clearActionBox?: boolean;
    use2D?: boolean;
    onImgOK?: (path: string) => void;
    onImgErr?: (error: any) => void;
    onViewUpdate?: (view: IView | undefined) => void;
    onViewClicked?: (view: IView | undefined) => void;
    onTouchEnd?: (detail: {
        view?: IView | undefined;
        type?: string;
        index?: number;
    }) => void;
    onDidShow?: () => void;
}
declare const Index: (props: IProps) => JSX.Element;
export default Index;
