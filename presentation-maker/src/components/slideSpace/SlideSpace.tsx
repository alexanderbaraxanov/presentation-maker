import styles from "./SlideSpace.module.css"
import { SlidePreview } from "../slidePreview/SlidePreview";
import type { Slide } from "../../../../src/types/slide";

type SlideSpaceProps = {
    activeSlide: Slide;
    scaleSlide: number;
    selectedIds?: string[];
    handlerSelecte?: (e: React.MouseEvent, objectId: string) => void;
}

function SlideSpace(props: SlideSpaceProps) {
    return (
        <div className={styles.slideSpace}>
            <SlidePreview slide={props.activeSlide} zoom={props.scaleSlide} selectedIds={props.selectedIds} handlerSelecte={props.handlerSelecte}/>
        </div>
    )
}

export { SlideSpace }