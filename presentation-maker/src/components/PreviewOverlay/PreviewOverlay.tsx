import { SlideSpace } from "../slideSpace/SlideSpace";
import type { Presentation } from "../../../../src/types/presentation";
import { Button } from "../button/Button";

import styles from "./PreviewOverlay.module.css"
import arrowRight from "../../assets/arrowRight.svg"
import arrowLeft from "../../assets/arrowLeft.svg"
import { getPreviewSlideIndex, setPreviewMode, setPreviewSlideIndex } from "../../../../src/editor";

type OverlayProps = {
    presentation: Presentation;
    activeSlideId: string | null;
}


function PreviewOverlay(props: OverlayProps) {
    const currentIndex = getPreviewSlideIndex();
    const currentSlide = props.presentation.slides[currentIndex];
    if (!currentSlide) {
        return null
    }

    return (
        <div className={styles.overlay}>    
            <div className={styles.menu}>
                <Button onClick={() => setPreviewMode(false)}  styleButton={styles.buttonClose} text="закрыть"/>
                <span className={styles.counter}>
                    {currentIndex + 1}/{props.presentation.slides.length}
                </span>
            </div>
            <div className={styles.slideStyle}>
                <Button imageUrl={arrowLeft} styleButton={styles.button} onClick={() => setPreviewSlideIndex(currentIndex - 1)}/>
                <SlideSpace activeSlide={currentSlide} scaleSlide={1.5}/>
                <Button imageUrl={arrowRight} styleButton={styles.button} onClick={() => setPreviewSlideIndex(currentIndex + 1)} />
            </div>
        </div>
    )
}

export { PreviewOverlay }