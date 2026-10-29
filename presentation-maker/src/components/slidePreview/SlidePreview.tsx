import styles from "./SlidePreview.module.css"
import type { Slide } from "../../../../src/types/slide";
import { SlideObj } from "../slideObject/SlideObject";

type SlidePreviewProps = {
    slide: Slide;
    zoom: number;
}

function SlidePreview(props: SlidePreviewProps) {
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
            <div className={styles.slidePreview} style={slideStyle}>
                {props.slide.slideObjects.map(object => {
                    return (
                        <SlideObj key={object.id} slideObject={object} />
                    )}
                )}
            </div>
        </div>
    )
}

export { SlidePreview }