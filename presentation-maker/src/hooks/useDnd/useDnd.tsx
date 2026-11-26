import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { SlideObject } from "../../../../src/types/objects";

function useDnd(slideId: string | undefined, selectedIds: string[], objects: SlideObject[], onMove: (id: string, x: number, y: number) => void) {

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const slide = useRef<HTMLDivElement | null>(null);
    const dragRef = useRef<{
        startX: number;
        startY: number;
        initialPositions: Map<string, { x: number; y: number }>;
    } | null>(null);

    const handlerMouseDown = (event: React.MouseEvent, objectId: string) => {
        if (!selectedIds.includes(objectId)) return;

        const currSlide = slide.current;
        if (!currSlide) return;
        
        const rect = currSlide.getBoundingClientRect();

        const startX = event.clientX - rect.left;
        const startY = event.clientY - rect.top;

        const initialPositions = new Map<string, { x: number; y: number }>();
        objects.forEach(obj => {
            if (selectedIds.includes(obj.id)) {
                initialPositions.set(obj.id, { x: obj.parametersObject.locationObject.x, y: obj.parametersObject.locationObject.y });
            }
        });

        dragRef.current = {
            startX,
            startY,
            initialPositions,
        };

        setIsDragging(true);
    };

    useLayoutEffect(() => {
        if (!isDragging) return;

        const handlerMouseMove = (event: MouseEvent) => {
            if (!dragRef.current || !slide.current) return;
            const rect = slide.current.getBoundingClientRect();

            const currentX = event.clientX - rect.left;
            const currentY = event.clientY - rect.top;

            const dx = currentX - dragRef.current.startX;
            const dy = currentY - dragRef.current.startY;

            dragRef.current.initialPositions.forEach((pos, id) => {
                onMove(id, pos.x + dx, pos.y + dy);
            });
        };

        const handlerMouseUp = () => {
            setIsDragging(false);
            dragRef.current = null;
        };

        document.addEventListener("mousemove", handlerMouseMove);
        document.addEventListener("mouseup", handlerMouseUp);

        return () => {
            document.removeEventListener("mousemove", handlerMouseMove);
            document.removeEventListener("mouseup", handlerMouseUp);
        };
    }, [isDragging, onMove]);

    useEffect(() => {
        setIsDragging(false);
        dragRef.current = null;
    }, [slideId]);

    return {
        slide,           
        handlerMouseDown,
        isDragging,   
    };
}

export {useDnd}