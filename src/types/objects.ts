type SlideObject = TextObject | ImageObject;

type TextObject = DefaultObject & {
    type: 'text',
    contentObject: Text,
}

type ImageObject = DefaultObject & {
    type: 'image',
    imageUrl: string,
}

type DefaultObject = {
    id: string,
    parametersObject: Parameters,
}

type Parameters = {
    locationObject: Point,
    sizeObject: Size,
}

type Text = {
    content: string,
    style: FontStyle,
}

type FontStyle = {
    fontFamily: string,
    fontSize: number,
    fontColor: string,
}

type Size = {
    height: number,
    width: number,
}

type Point = {
    x: number,
    y: number,
}

export type { 
    SlideObject,
    TextObject, 
    ImageObject, 
    DefaultObject, 
    Text,
    Parameters,
    Point, 
    Size, 
    FontStyle 
};