import { useEffect } from "react";
import { removeObject } from "../../../../src/functions/objects";
import { dispatch } from "../../../../src/editor";

function useDeleteSelectedObjs(slideId: string | undefined, selectedIds: string[], clearSelection: () => void) {
    useEffect(() => {
        const handlerKey = (e: KeyboardEvent) => {
            if (e.key == 'Delete' && selectedIds.length > 0) {
                if (slideId) {
                    dispatch(removeObject, {slideId, objectIds: selectedIds});
                    clearSelection(); 
                }
            }
        }
        document.addEventListener('keydown', handlerKey);
        return () => {
            document.removeEventListener('keydown', handlerKey)
        }
    }, [slideId, selectedIds, clearSelection])
}

export { useDeleteSelectedObjs }