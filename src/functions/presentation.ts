import type { Presentation } from '../types/presentation.ts';
import { createDefaultSlide } from './slide.js';

function createPresentation(name: string, idSlide: string ,id: string): Presentation {
    const defaultSlide = createDefaultSlide('Слайд 1', idSlide); 
    return {
        id: id,
        name: name,
        slides: [defaultSlide],
    }
}

function updatePresentationName(presentation: Presentation, name: string): Presentation {
    return {
        ...presentation,
        name,
    }
}

function savePresentation(presentation: Presentation): string {
    return JSON.stringify(presentation, null, 2);
}

function loadPresentation(json: string): Presentation {
    return JSON.parse(json) as Presentation;
}

export {
  createPresentation,
  updatePresentationName,
  savePresentation,
  loadPresentation,
};