import type { Presentation } from './types/presentation.js';

type Modifier<P = any> = (model: Presentation, params: P) => Presentation;

let modifierParams: any = null;

let editorChangeHandler: (() => void) | null = null;

let currentPresentation: Presentation | null = null;

let activeSlide: string | null = null;

let isPreviewMode: boolean = false; 

let previewSlideIndex: number = 0;

function setInitialState(presentation: Presentation): void {
    currentPresentation = presentation;

    if (presentation.slides.length > 0) {
        activeSlide = presentation.slides[0].id;
    }
}

function getState(): Presentation | null {
    return currentPresentation;
}

function setPreviewMode(mode: boolean): void {
    isPreviewMode = mode;

    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

function getPreviewMode(): boolean {
    return isPreviewMode;
}

function getActiveSlide(): string | null {
    return activeSlide;
}

function setActiveSlide(activeSlideId: string): void {
    activeSlide = activeSlideId;

    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

function getPreviewSlideIndex(): number {
    return previewSlideIndex;
}

function setPreviewSlideIndex(index: number): void {
    if (!currentPresentation) return;
    if (index >= 0 && index < currentPresentation.slides.length) {
        previewSlideIndex = index;
    }

    if (editorChangeHandler) {
        editorChangeHandler();
    }
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
    setPreviewMode,
    getPreviewMode,
    setPreviewSlideIndex,
    getPreviewSlideIndex,

    dispatch, 
    addEditorChangeHandler
};
