import type { Presentation } from './types/presentation.js';

type Modifier<P = any> = (model: Presentation, params: P) => Presentation;

let modifierParams: any = null;

let editorChangeHandler: (() => void) | null = null;

let currentPresentation: Presentation | null = null;
let past: Presentation[] = [];
let future: Presentation[] = [];

function setInitialState(presentation: Presentation): void {
    currentPresentation = presentation;
    past = [];
    future = [];
}

function getState(): Presentation | null {
    return currentPresentation;
}

function undo(): void {
    if (past.length === 0 || !currentPresentation) return;

    future = [currentPresentation, ...future];
    const previous = past[past.length - 1];
    past = past.slice(0, -1);
    currentPresentation = previous;
    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

function redo(): void {
    if (future.length === 0 || !currentPresentation) return;
    
    past = [...past, currentPresentation];
    const next = future[0];
    future = future.slice(1);
    currentPresentation = next;
    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

function getCanUndo(): boolean { return past.length > 0; }

function getCanRedo(): boolean { return future.length > 0; }

function getHistoryState(): { canUndo: boolean; canRedo: boolean } {
  return {
    canUndo: past.length > 0,
    canRedo: future.length > 0,
  };
}

function addEditorChangeHandler(handler: () => void): void {
    editorChangeHandler = handler;
}

function dispatch(modifier: Modifier, params: any = null): void {
    if (!currentPresentation) {
        console.error('State is not initialized! Call setInitialState first.');
        return;
    }

    if (currentPresentation) {
       past = [...past, currentPresentation];
    }

    future = [];

    modifierParams = params;
    currentPresentation = modifier(currentPresentation, params);

    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

export { 
    setInitialState, 
    getState, 

    undo,
    redo,
    getCanUndo,
    getCanRedo,
    getHistoryState,

    dispatch, 
    addEditorChangeHandler
};
