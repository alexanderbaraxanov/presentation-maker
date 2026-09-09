type Point = {
    x: number;
    y: number;
}

type DefaultObject = {
    id: string,
    location: Point;
    height: number;
    width: number;
}

type TextObject = DefaultObject & {
    type: 'text';
    content: string;
    fontFamily: string;
    fontSize: number;
    fontColor: string;
}

type ImageObject = DefaultObject & {
    type: 'image';
    imageUrl: string;
}

export type { TextObject, ImageObject};