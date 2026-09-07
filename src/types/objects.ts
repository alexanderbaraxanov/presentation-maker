type Point = {
    x: number;
    y: number;
}

type DefaultObject = {
    location: Point;
    height: number;
    width: number;
}

type TextObject = DefaultObject & {
    type: 'text';
    text: string;
}

type ImageObject = DefaultObject & {
    type: 'image';
    scr: string;
}

type SlideObject = TextObject | ImageObject;

export type { TextObject, ImageObject, SlideObject};