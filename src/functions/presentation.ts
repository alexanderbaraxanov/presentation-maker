import type { Presentation } from '../types/presentation.ts';

function createPresentation(name: string, id: string): Presentation {
    return {
        id: id,
        name: name,
        slides: [],
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