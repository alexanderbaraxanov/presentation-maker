import styles from "./SlideList.module.css"
import arrowRight from "../../assets/arrowRight.svg"
import arrowLeft from "../../assets/arrowLeft.svg"
import plus from "../../assets/plus.svg"
import { Button } from "../button/Button"
import { addSlide } from "../../../../src/functions/slide"
import { SlidePreview } from "../slidePreview/SlidePreview"
import { dispatch } from "../../../../src/editor"
import { generateId } from "../../../../src/functions/generateId"
import { useContext } from "react"
import { CurrentPresentation } from '../presentationProvider/presentationProvider.tsx';

function SlideList() {
    const presentationContext = useContext(CurrentPresentation)
    const next = presentationContext?.nextSlide;
    const prev = presentationContext?.prevSlide;
    const slides = presentationContext?.presentation?.slides;

    const listItems = slides?.map((slide) => (<SlidePreview key={slide.id} slide={slide} zoom={0.1} />))
    return (
        <div className={styles.slideListSpace}>
            <Button imageUrl={arrowLeft} styleButton={styles.button} onClick={prev} />
            <div className={styles.slideList}>
                {listItems}
            </div>
            <Button imageUrl={plus} styleButton={styles.button} onClick={() => {dispatch(addSlide, {id: generateId(), name: 'slide'})}} />
            <Button imageUrl={arrowRight} styleButton={styles.button} onClick={next} />
        </div>
    )
}

export { SlideList }