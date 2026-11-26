import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MIN_SIZE = 30;

function useResize(
    slideId: string | undefined,
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

    const handlerResizeStart = (
        event: React.MouseEvent,
        objectId: string,
        width: number,
        height: number
    ) => {
        if (event.button !== 0) return;
        event.preventDefault();

        resizeRef.current = {
            objectId,
            startX: event.clientX,
            startY: event.clientY,
            startWidth: width,
            startHeight: height,
        };
        setIsResizing(true);
    };

    useLayoutEffect(() => {
        if (!isResizing) return;

        const handlerMouseMove = (event: MouseEvent) => {
            const rect = resizeRef.current;
            if (!rect) return;

            const dx = (event.clientX - rect.startX);
            const dy = (event.clientY - rect.startY);

            const width = Math.max(MIN_SIZE, rect.startWidth + dx);
            const height = Math.max(MIN_SIZE, rect.startHeight + dy);

            onResizeRef.current(rect.objectId, width, height);
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