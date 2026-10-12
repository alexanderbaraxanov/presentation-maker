import { describe, it, expect } from 'vitest';
import { 
    FontStyle,
    Text, 
    Size, 
    Point, 
    Parameters 
} from '../types/objects.ts';
import {
    createDefaultSlide
} from '../functions/slide.ts';
import {  
    createDefaultObject,
    addTextObject,
    addImageObject,
    removeObject,
    moveObject,
    resizeObject,
    updateTextObject,
} from '../functions/objects.ts';
import { Slide } from '../types/slide.ts';

function setParameters(): {parameters: Parameters} {
    const size: Size = {
        height: 800,
        width:400,
    };

    const location: Point = {
        x: 1,
        y: 1,
    }

    const parameters: Parameters = {
        locationObject: location,
        sizeObject: size,
    }

    return {
        parameters,
    }
}

function setSettings(): {
    slide: Slide;
    parameters: Parameters;
} {
    
    const slide: Slide = createDefaultSlide('1', 'слайд 1');
    const { parameters } = setParameters();

    return {
        slide,
        parameters,
    }
}

it.for([
    {height: 1, width: 1},
    {height: 1, width: 0},
    {height: 0, width: 1},
    {height: 0, width: 0},
    {height: 400, width: 500},
])('should create default slide object', ({height, width}) => {
    const size: Size = {
        height,
        width,
    };

    const location: Point = {
        x: 1,
        y: 1,
    }

    const parameters: Parameters = {
        locationObject: location,
        sizeObject: size,
    }
    const slideObject = createDefaultObject('1', parameters);

    expect(slideObject.id).toBe('1');
    expect(slideObject.parametersObject.locationObject).toBe(location);
    expect(slideObject.parametersObject.sizeObject).toBe(size);
    expect(size).toEqual({ height, width });
})

it('should add new text object', () => {
    const {slide, parameters} = setSettings();

    const style: FontStyle = {
        fontColor: 'black',
        fontFamily: 'Aria',
        fontSize: 16,
    }

    const text: Text = {
        content: 'text',
        style: style,
    }

    const updatedSlide = addTextObject(slide, '1', parameters, text);

    const lengthArray = slide.slideObjects.length;
    expect(updatedSlide).not.toBe(slide);
    expect(updatedSlide.slideObjects).toHaveLength(lengthArray + 1);
    expect(slide.slideObjects).toHaveLength(lengthArray);
})

it('should add new image object', () => {
    const {slide, parameters} = setSettings();

    const image = 'image.pdf';

    const updatedSlide = addImageObject(slide, '1', parameters, image);

    const lengthArray = slide.slideObjects.length;
    expect(updatedSlide).not.toBe(slide);
    expect(updatedSlide.slideObjects).toHaveLength(lengthArray + 1);
    expect(slide.slideObjects).toHaveLength(lengthArray);
})

it('should remove slide object by id', () => {
    const { slide, parameters } = setSettings();

    const fontStyle: FontStyle = { 
        fontColor: 'black',
        fontFamily: 'Arial', 
        fontSize: 16 
    }

    const slideWithFirstObject = addTextObject(slide, '1', parameters, {
        content: 'text',
        style: fontStyle,
    });
    const slideWithSecondObject = addTextObject(slideWithFirstObject, '2', parameters, {
        content: 'other',
        style: fontStyle,
    });

    const updatedSlide = removeObject(slideWithSecondObject, '1');

    expect(updatedSlide.slideObjects.find(object => object.id === '1')).toBeUndefined();
    expect(updatedSlide.slideObjects.find(object => object.id === '2')).toBeDefined();
    expect(updatedSlide.slideObjects).toHaveLength(1);

    expect(updatedSlide).not.toBe(slideWithSecondObject);      
    expect(slideWithSecondObject.slideObjects).toHaveLength(2);  
});

it('should not throw when removing non-existent object', () => {
    const { slide } = setSettings();

    const result = removeObject(slide, 'nope');
    expect(result.slideObjects).toHaveLength(0);
    expect(result).not.toBe(slide);
});

it('should move slide object', () => { 
    const {slide, parameters} = setSettings();
    const updatedSlide = addImageObject(slide, '1', parameters, 'image.png');
    const newLocation: Point = {
        x: 2,
        y: 2,
    }

    const movedSlide = moveObject(updatedSlide, '1', newLocation);

    expect(movedSlide.slideObjects[0].parametersObject.locationObject).toEqual(newLocation);
    expect(movedSlide.slideObjects[0].parametersObject.sizeObject).toEqual(parameters.sizeObject);
    expect(updatedSlide.slideObjects[0].parametersObject.locationObject).toEqual({ x: 1, y: 1 });
    expect(movedSlide.slideObjects[0]).not.toBe(updatedSlide.slideObjects[0]);
    expect(movedSlide).not.toBe(updatedSlide);
})

it('should resize slide object', () => { 
    const {slide, parameters} = setSettings();
    const updatedSlide = addImageObject(slide, '1', parameters, 'image.png');
    const newSize: Size = {
        height: 200,
        width: 200,
    }

    const resizedSlide = resizeObject(updatedSlide, '1', newSize);

    expect(resizedSlide.slideObjects[0].parametersObject.sizeObject).toEqual(newSize);
    expect(resizedSlide.slideObjects[0].parametersObject.locationObject).toEqual(parameters.locationObject);
    expect(updatedSlide.slideObjects[0].parametersObject.sizeObject).toEqual(parameters.sizeObject);
    expect(resizedSlide.slideObjects[0]).not.toBe(updatedSlide.slideObjects[0]);
    expect(resizedSlide).not.toBe(updatedSlide);
})

it('should update style slide object', () => { 
    const {slide, parameters} = setSettings();
    const style: FontStyle = {
        fontColor: 'black',
        fontFamily: 'Aria',
        fontSize: 16,
    }
    const text: Text = {
        content: 'text',
        style: style,
    }

    const updatedSlide = addTextObject(slide, '1', parameters, text);
    const newStyle: FontStyle = {
        fontColor: 'white',
        fontFamily: 'Times',
        fontSize: 20,
    }
    const newText: Text = {
        content: 'text',
        style: newStyle,
    }

    const newSlide = updateTextObject(updatedSlide, '1', newText);

    if (updatedSlide.slideObjects[0].type !== 'text') {
        throw new Error('Not text object');
    }
    if (newSlide.slideObjects[0].type !== 'text') {
        throw new Error('Not text object');
    }

    expect(newSlide.slideObjects[0].contentObject).toEqual(newText);
    expect(updatedSlide.slideObjects[0].contentObject).toEqual(text);
    expect(newSlide.slideObjects[0]).not.toBe(updatedSlide.slideObjects[0]);
    expect(newSlide).not.toBe(updatedSlide);
})