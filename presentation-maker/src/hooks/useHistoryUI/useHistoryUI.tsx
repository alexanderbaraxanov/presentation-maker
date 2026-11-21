import { useState, useEffect, useCallback } from 'react';
import { undo, redo, getCanUndo, getCanRedo, addEditorChangeHandler } from "../../../../src/editor";;

type HistoryUI = {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}

function useHistoryUI(): HistoryUI {
    const [canUndo, setCanUndo] = useState(getCanUndo());
    const [canRedo, setCanRedo] = useState(getCanRedo());

    useEffect(() => {
        const sync = () => {
            setCanUndo(getCanUndo());
            setCanRedo(getCanRedo());
        };
            addEditorChangeHandler(sync);
        return () => {
        // очистка при размонтировании
        };
    }, []);

    const onUndo = useCallback(() => {
        undo();
    }, []);

    const onRedo = useCallback(() => {
        redo();
    }, []);
    return { canUndo, canRedo, onUndo, onRedo };
}
