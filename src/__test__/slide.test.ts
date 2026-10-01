import { describe, it, expect } from 'vitest';
import {
    createDefaultSlide,
    addSlide,
    removeSlide,
    moveSlide,
    duplicateSlide,
    setSlideBackground,
} from '../functions/slide.ts';
import {
    createPresentation,
} from '../functions/presentation.ts';
import { Presentation } from '../types/presentation.ts';
import { Slide, Background } from '../types/slide.ts';

function setDefaultPresentation(): {presentation: Presentation, slide: Slide} {
    const defaultPresentation = createPresentation('my_presentation' , '1');
    const presentation = addSlide(defaultPresentation, '1', 'новый_слайд');
    const slide = presentation.slides[0];

    return {
        presentation, 
        slide,
    }
}

it('should create default slide', () => {
    const slide = createDefaultSlide('1', '1 слайд');

    expect(slide.id).toBe('1');
    expect(slide.name).toBe('1 слайд');
    expect(slide.background).toBeNull();
    expect(slide.slideObjects.length).toBe(0);
})

it('should add new slide in presentation', () => {
    const presentation = createPresentation('my_presentation' , '1');
    const updatedPresentation = addSlide(presentation, '2', 'slide 2');

    expect(presentation.slides).toHaveLength(0);
    expect(updatedPresentation.slides).toHaveLength(1);

    const newSlide = updatedPresentation.slides[0];
    expect(newSlide.id).toBe('2');
    expect(newSlide.name).toBe('slide 2');
})

it('should move slide in presentation', () => {
    const {presentation} = setDefaultPresentation();
    const newPresentation = addSlide(presentation, '2', 'новый_слайд2');

    const updatedPresentation = moveSlide(newPresentation, '2', 0);

    expect(updatedPresentation.slides[0]).not.toBe(updatedPresentation.slides[1]);
    expect(updatedPresentation.slides[1].id).toEqual('1');
    expect(updatedPresentation.slides[1].name).toEqual('новый_слайд');
    expect(updatedPresentation.slides).toHaveLength(2);
    console.log(updatedPresentation.slides)
})

it('should remove slide in presentation', () => {
    const {presentation, slide} = setDefaultPresentation();

    const newPresentation = removeSlide(presentation, [slide.id, 'hhj']);
    
    expect(newPresentation.slides.find(currSlide => currSlide.id === slide.id)).toBeUndefined();
    expect(newPresentation).not.toBe(presentation);
    expect(newPresentation.slides).toHaveLength(0);
    expect(presentation.slides).toHaveLength(1);
})

it('should duplicate slide', () => {
    const {presentation, slide} = setDefaultPresentation();

    const updatedPresentation = duplicateSlide(presentation, slide.id, '2');

    expect(updatedPresentation.slides).toHaveLength(2);

    const duplicatedSlide = updatedPresentation.slides.find(slide => slide.id === '2');
    if (!duplicatedSlide) {
        throw new Error('Duplicated slide not found');
    }

    expect(duplicatedSlide).toBeDefined();
    expect(duplicatedSlide.name).toBe(slide.name);
    expect(duplicatedSlide.slideObjects).toEqual(slide.slideObjects);
    expect(duplicatedSlide.slideObjects).not.toBe(slide.slideObjects);
    expect(presentation.slides).toHaveLength(1);
})

it('should set background with color', () => {
    const { slide } = setDefaultPresentation();

    const background: Background = {
        type: 'color',
        color: 'black',
    }

    const updatedSlide = setSlideBackground(slide, background)

    expect(updatedSlide.background).toBe(background);
    expect(updatedSlide).not.toBe(slide);
    expect(slide.background).toBeNull();
})

it('should set background with gradient', () => {
    const { slide } = setDefaultPresentation();

    const background: Background = {
        type: 'gradient',
        colors: ['black', 'white'],
        angle: 30,
    }

    const updatedSlide = setSlideBackground(slide, background)

    expect(updatedSlide.background).toBe(background);
    expect(updatedSlide).not.toBe(slide);
    expect(slide.background).toBeNull();
})

it('should set background with image', () => {
    const { slide } = setDefaultPresentation();
 
    const background: Background = {
        type: 'image',
        src: 'image.pdf',
    }

    const updatedSlide = setSlideBackground(slide, background)

    expect(updatedSlide.background).toBe(background);
    expect(updatedSlide).not.toBe(slide);
    expect(slide.background).toBeNull();
})

it('should clear background', () => {
    const { slide } = setDefaultPresentation();

    const background: Background = null

    const updatedSlide = setSlideBackground(slide, background)

    expect(updatedSlide.background).toBe(background);
    expect(updatedSlide).not.toBe(slide);
    expect(slide.background).toBeNull();
})