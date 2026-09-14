type Point = {
    x: number;
    y: number;
}

type Size = {
    height: number,
    width: number,
}

type FontStyle = {
    fontFamily: string;
    fontSize: number;
    fontColor: string;
}

type DefaultObject = {
    id: string,
    location: Point;
    sizeObject: Size;
}

type TextObject = DefaultObject & {
    type: 'text';
    content: string;
    contentStyle: FontStyle;
}

type ImageObject = DefaultObject & {
    type: 'image';
    imageUrl: string;
}

export type { TextObject, ImageObject, DefaultObject, Point, Size, FontStyle };