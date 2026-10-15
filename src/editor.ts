import type { Presentation } from './types/presentation.js';

type Modifier<P = any> = (model: Presentation, params: P) => Presentation;

let modifierParams: any = null;

let editorChangeHandler: (() => void) | null = null;

let currentPresentation: Presentation | null = null;

function setInitialState(presentation: Presentation): void {
    currentPresentation = presentation;
}

function getState(): Presentation | null {
    return currentPresentation;
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
    dispatch, 
    addEditorChangeHandler
};
