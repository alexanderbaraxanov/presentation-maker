import { describe, it, expect } from 'vitest';
import { Size, Point } from '../types/objects.ts';
import {  
    addDefaultObject,
    addTextObject,
    addImageObject,
    removeObject,
    moveObject,
    resizeObject,
    updateTextObjectStyle,
} from '../functions/objects.ts';

it.for([
    {height: 1, width: 1},
    {height: 1, width: 0},
    {height: 0, width: 1},
    {height: 0, width: 0},
    {height: -1, width: 0},
    {height: 0, width: -1},
    {height: -1, width: -1},
])('should create default slide object', ({height, width}) => {
    const size: Size = {
        height,
        width,
    };
    const location: Point = {
        x: 1,
        y: 1,
    }
    const slideObject = addDefaultObject('1', location, size);

    expect(slideObject.location).toEqual(location);
    expect(slideObject.sizeObject).toEqual(size);
})