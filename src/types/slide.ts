import type { TextObject, ImageObject } from './objects.ts';

type SlideObject = TextObject | ImageObject;

type Slide = {
    id: string;
    name: string;
    slideObjects: SlideObject[];
    background: Background;
} 

type Background = ColorBackground | GradientBackground | ImageBackground | null

type ColorBackground = {
    type: 'color';
    color: string;
}

type GradientBackground = {
    type: 'gradient';
    colors: string[];
    angle?: number;
}

type ImageBackground = {
    type: 'image';
    src: string;
}

export type { Slide, Background};