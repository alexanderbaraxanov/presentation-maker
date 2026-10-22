import styles from "./SlideSpace.module.css"
import { SlidePreview } from "../slidePreview/SlidePreview";
import type { Slide } from "../../../../src/types/slide";

type SlideSpaceProps = {
    activeSlide: Slide;
}

function SlideSpace(props: SlideSpaceProps) {
    return (
        <div className={styles.slideSpace}>
            <div className={styles.slideWrapper}>
                <SlidePreview slide={props.activeSlide}/>
            </div>
        </div>
    )
}

export { SlideSpace }