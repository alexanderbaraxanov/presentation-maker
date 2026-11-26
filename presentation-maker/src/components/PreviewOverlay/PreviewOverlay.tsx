import { SlideSpace } from "../slideSpace/SlideSpace";
import { Button } from "../button/Button";

import styles from "./PreviewOverlay.module.css"
import arrowRight from "../../assets/arrowRight.svg"
import arrowLeft from "../../assets/arrowLeft.svg"
import { useContext } from "react";
import { CurrentPresentation } from '../presentationProvider/presentationProvider.tsx';


function PreviewOverlay() {
    const presentationContext = useContext(CurrentPresentation)
    const currentIndex = presentationContext?.previewSlideId;
    const slides = presentationContext?.presentation?.slides;
    if (!slides || !currentIndex) return;

    const next = presentationContext?.nextSlide;
    const prev = presentationContext?.prevSlide;
    const switchMode = useContext(CurrentPresentation)?.switchIsPreview

    return (
        <div className={styles.overlay}>    
            <div className={styles.menu}>
                <Button onClick={switchMode}  styleButton={styles.buttonClose} text="закрыть"/>
                <span className={styles.counter}>
                    {currentIndex + 1}/{slides.length}
                </span>
            </div>
            <div className={styles.slideStyle}>
                <Button imageUrl={arrowLeft} styleButton={styles.button} onClick={prev}/>
                <SlideSpace activeSlide={slides[currentIndex]} scaleSlide={1.5}/>
                <Button imageUrl={arrowRight} styleButton={styles.button} onClick={next} />
            </div>
        </div>
    )
}

export { PreviewOverlay }