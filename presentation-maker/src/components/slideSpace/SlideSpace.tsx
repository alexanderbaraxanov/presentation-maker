import styles from "./SlideSpace.module.css"
import { SlidePreview } from "../slidePreview/SlidePreview";
import type { Slide } from "../../../../src/types/slide";

type SlideSpaceProps = {
    activeSlide: Slide;
    scaleSlide: number;
}

function SlideSpace(props: SlideSpaceProps) {
    return (
        <div className={styles.slideSpace}>
            <SlidePreview slide={props.activeSlide} scale={props.scaleSlide}/>
        </div>
    )
}

export { SlideSpace }