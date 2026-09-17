import { describe, it, expect } from 'vitest';
import {
    createPresentation,
    updatePresentationName,
    savePresentation,
    loadPresentation,
} from '../functions/presentation.ts';
import { generateId } from '../functions/objects.ts';

it('should create presentation with defaul slide', () => {
    const presentationId = generateId();
    const presentation = createPresentation('my_presentation', presentationId);

    expect(presentation.id).toBe(presentationId);
    expect(presentation.name).toEqual('my_presentation');
    expect(presentation.slides.length).toBeNull;
})

it('should rename presentation', () => {
    const presentationId = generateId();
    const presentation = createPresentation('my_presentation', presentationId); 

    const updatedPresentation = updatePresentationName(presentation, 'new_presentation');
    
    expect(updatedPresentation.id).toBe(presentation.id);
    expect(updatedPresentation.name).toEqual('new_presentation');
    expect(updatedPresentation.slides).toBe(presentation.slides);
})

it('should correctly save and load presentation', () => {
    const presentationId = generateId();
    const presentation = createPresentation('my_presentation', presentationId);
    
    const savedPresentation = savePresentation(presentation);
    const loadedPresentation = loadPresentation(savedPresentation);

    expect(loadedPresentation).toEqual(presentation);
    expect(loadedPresentation.slides).not.toBe(presentation.slides);
})