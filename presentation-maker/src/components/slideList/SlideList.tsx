import styles from "./SlideList.module.css"
import arrowRight from "../../assets/arrowRight.svg"
import arrowLeft from "../../assets/arrowLeft.svg"
import plus from "../../assets/plus.svg"
import { Button } from "../button/Button"
import { addSlide } from "../../../../src/functions/slide"
import { SlidePreview } from "../slidePreview/SlidePreview"
import { dispatch } from "../../../../src/editor"
import type { Presentation } from "../../../../src/types/presentation"
import { generateId } from "../../../../src/functions/generateId"
import { setPreviewSlideIndex, getPreviewSlideIndex } from "../../../../src/editor"

type SlideListProps = {
    presentation: Presentation;
}

function SlideList(props: SlideListProps) {
    const currentIndex = getPreviewSlideIndex();
    const listItems = props.presentation.slides.map((slide) => (<SlidePreview key={slide.id} slide={slide} zoom={0.1}  />))

    return (
        <div className={styles.slideListSpace}>
            <Button imageUrl={arrowLeft} styleButton={styles.button} onClick={() => setPreviewSlideIndex(currentIndex - 1)}/>
            <div className={styles.slideList}>
                {listItems}
            </div>
            <Button imageUrl={plus} styleButton={styles.button} onClick={() => {dispatch(addSlide, {id: generateId(), name: 'slide'})}} />
            <Button imageUrl={arrowRight} styleButton={styles.button} onClick={() => setPreviewSlideIndex(currentIndex + 1)} />
        </div>
    )
}

export { SlideList }