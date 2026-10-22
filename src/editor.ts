import type { Presentation } from './types/presentation.js';

type Modifier<P = any> = (model: Presentation, params: P) => Presentation;

let modifierParams: any = null;

let editorChangeHandler: (() => void) | null = null;

let currentPresentation: Presentation | null = null;

let activeSlide: string | null = null;

let isPreview: boolean = false; 


function setInitialState(presentation: Presentation): void {
    currentPresentation = presentation;

    if (presentation.slides.length > 0) {
        activeSlide = presentation.slides[0].id;
    }
}

function getState(): Presentation | null {
    return currentPresentation;
}

function setPreviewMod(previewMod: boolean): void {
    isPreview = previewMod;
}
function getPreviewMod(): boolean {
    return isPreview;
}

function setActiveSlide(activeSlideId: string): void {
    activeSlide = activeSlideId;
}

function getActiveSlide(): string | null {
    return activeSlide;
}

function addEditorChangeHandler(handler: () => void): void {
    editorChangeHandler = handler;
}

function dispatch(modifier: Modifier, params: any = null): void {
    if (!currentPresentation) {
        console.error('State is not initialized! Call setInitialState first.');
        return;
    }

    modifierParams = params;
    currentPresentation = modifier(currentPresentation, params);

    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

export { 
    setInitialState, 
    getState, 

    setActiveSlide,
    getActiveSlide,
    setPreviewMod,
    getPreviewMod,

    dispatch, 
    addEditorChangeHandler
};
