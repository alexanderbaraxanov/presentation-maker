import type { Presentation } from '../types/presentation.ts';
import { createDefaultSlide } from './slide.js'

function generateId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${randomPart}`;
} 
// написать собственную генерацию

function createPresentation(name: string, id: string): Presentation {
    const idSlide = generateId();
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