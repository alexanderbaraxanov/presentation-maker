const TEXT_INPUT_TYPES = new Set(['text', 'number']);

function isTypingTarget(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) return false;

    if (target.isContentEditable || target instanceof HTMLTextAreaElement) return true;
    if (target instanceof HTMLInputElement) {
        return TEXT_INPUT_TYPES.has(target.type);
    }
    
    return false;
}

export { isTypingTarget }
