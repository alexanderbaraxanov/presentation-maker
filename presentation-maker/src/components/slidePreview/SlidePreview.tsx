import styles from "./SlidePreview.module.css"
import type { Slide } from "../../../../src/types/slide";
import { SlideObj } from "../slideObject/SlideObject";
import { useDnd } from "../../hooks/useDnd/useDnd";
import { dispatch } from "../../../../src/editor";
import { useResize } from "../../hooks/useResize/useResize";
import { resizeObjectPresentation, moveObjectPresentation } from "../../../../src/functions/objects";

type SlidePreviewProps = {
    slide: Slide;
    zoom: number;
    selectedIds?: string[];
    handlerSelecte?: (e: React.MouseEvent, objectId: string) => void;
}

function SlidePreview(props: SlidePreviewProps) {

    const { slide, handlerMouseDown } = useDnd(
        props.slide.id,     
        props.selectedIds || [], 
        props.slide.slideObjects, 
        (id, x, y) => {
            dispatch(moveObjectPresentation, {
                slideId: props.slide.id,
                objectId: id,
                x,
                y,
            });
        }
    );

    const { handlerResizeStart } = useResize(
        props.slide.id,
        (id, width, height) => {
            dispatch(resizeObjectPresentation, {
                slideId: props.slide.id,
                objectId: id,
                width,
                height,
            });
        }
    );

    const background = props.slide.background
    let wrapperStyle = {
        zoom: props.zoom,
    }

    let slideStyle = {};
    if (background?.type == 'color'){
        slideStyle = {
            background: background.color,
        };
    }

    return (
        <div className={styles.slideWrapper} style={wrapperStyle}>
            <div ref={slide} className={styles.slidePreview} style={slideStyle}>
                {props.slide.slideObjects.map(object => {
                    const isSelected = props.selectedIds?.includes(object.id); 
                    return (
                        <SlideObj 
                            key={object.id} 
                            slideObject={object} 
                            isSelected={isSelected} 
                            onSelect={props.handlerSelecte} 
                            onMouseDown={(e: React.MouseEvent) => {
                                handlerMouseDown(e, object.id);
                            }}
                            onResizeStart={(e: React.MouseEvent) => {
                                handlerResizeStart(
                                    e,
                                    object.id,
                                    object.parametersObject.sizeObject.width,
                                    object.parametersObject.sizeObject.height
                                );
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export { SlidePreview }