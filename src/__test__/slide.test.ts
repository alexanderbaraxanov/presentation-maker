import { describe, it, expect } from 'vitest';
import {
    createDefaultSlide,
    addSlide,
    removeSlides,
    duplicateSlide,
    setSlideBackgroundColor,
    setSlideBackgroundGradient,
    setSlideBackgroundImage,
    clearSlideBackground,
} from '../functions/slide.ts';
import {
    createPresentation,
} from '../functions/presentation.ts';

it('should create default slide', () => {
    const slide = createDefaultSlide('1', '1 слайд');

    expect(slide.id).toBe('1');
    expect(slide.name).toBe('1 слайд');
    expect(slide.background).toBeNull();
    expect(slide.slideObjects.length).toBe(0);
})

it.for([
    {name: ''},
    {name: 'slide 2'},
])('should add new slide in presentation', ({name}) => {
    const presentation = createPresentation('my_presentation' , '1');
    const newSlide = addSlide(presentation, '2', name);

    expect(presentation.slides[1]).toBe(newSlide);
    expect(newSlide.id).toEqual('1');
    expect(newSlide.name).toEqual(name);
})

it('should remove slide in presentation', () => {
    const presentation = createPresentation('my_presentation' , '1');
    const newSlide = addSlide(presentation, '2', '2');
    const newPresentation = removeSlides(presentation, [newSlide.id]);

    expect(presentation.slides).not.toBe(newPresentation.slides);
    expect(presentation.id).toBe(newPresentation.id);
})

it('', () => {

})

it('', () => {

})

it('', () => {

})

it('', () => {

})

it('', () => {

})