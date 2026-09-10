type Point = {
    x: number;
    y: number;
}

type Size = {
    height: number,
    width: number,
}

type Text = {
    content: string;
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
    textObject: Text;
}

type ImageObject = DefaultObject & {
    type: 'image';
    imageUrl: string;
}

export type { TextObject, ImageObject, Point, Size, Text };