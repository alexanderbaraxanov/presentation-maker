import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MIN_SIZE = 30;

function useResize(
    slideId: string | undefined,
    zoom: number,
    onResize: (id: string, width: number, height: number) => void
) {
    const [isResizing, setIsResizing] = useState(false);

    const resizeRef = useRef<{
        objectId: string;
        startX: number;
        startY: number;
        startWidth: number;
        startHeight: number;
    } | null>(null);

    const onResizeRef = useRef(onResize);
    onResizeRef.current = onResize;
    const zoomRef = useRef(zoom);
    zoomRef.current = zoom;

    const handlerResizeStart = (
        e: React.MouseEvent,
        objectId: string,
        width: number,
        height: number
    ) => {
        if (e.button !== 0) return;
        e.preventDefault();

        resizeRef.current = {
            objectId,
            startX: e.clientX,
            startY: e.clientY,
            startWidth: width,
            startHeight: height,
        };
        setIsResizing(true);
    };

    useLayoutEffect(() => {
        if (!isResizing) return;

        const handlerMouseMove = (e: MouseEvent) => {
            const r = resizeRef.current;
            if (!r) return;

            const dx = (e.clientX - r.startX) / zoomRef.current;
            const dy = (e.clientY - r.startY) / zoomRef.current;

            const width = Math.max(MIN_SIZE, r.startWidth + dx);
            const height = Math.max(MIN_SIZE, r.startHeight + dy);

            onResizeRef.current(r.objectId, width, height);
        };

        const handlerMouseUp = () => {
            setIsResizing(false);
            resizeRef.current = null;
        };

        document.addEventListener("mousemove", handlerMouseMove);
        document.addEventListener("mouseup", handlerMouseUp);
        return () => {
            document.removeEventListener("mousemove", handlerMouseMove);
            document.removeEventListener("mouseup", handlerMouseUp);
        };
    }, [isResizing]);

    useEffect(() => {
        setIsResizing(false);
        resizeRef.current = null;
    }, [slideId]);

    return { handlerResizeStart, isResizing };
}

export { useResize };