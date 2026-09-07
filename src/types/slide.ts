import type { SlideObject } from './objects.ts';

type Slide = {
    id: string;
    name: string;
    slideObjects: SlideObject[];
    background: Background;
} 

type Background = ColorBackground | ImageBackground

type ColorBackground = {
    color: string;
    filling: 'solid' | 'gradient';
}

type ImageBackground = {
    src: string;
}

export type { Slide, Background};