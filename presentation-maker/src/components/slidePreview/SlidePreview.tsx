import styles from "./SlidePreview.module.css"
import type { Slide } from "../../../../src/types/slide";

type SlidePreviewProps = {
    slide: Slide;
}

function SlidePreview(props: SlidePreviewProps) {
    const objects = props.slide.slideObjects
    const background = props.slide.background
    const nameSlide = props.slide.name
    return (
        <div className={styles.slidePreview}>
            {nameSlide}
            <>
                {objects.map(object => {
                    return (
                        <>
                            {object}
                        </>
                    )}
                )}
            </>
        </div>
    )
}

export { SlidePreview }