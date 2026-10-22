import styles from "./SlideList.module.css"
import arrowRight from "../../assets/arrowRight.svg"
import arrowLeft from "../../assets/arrowLeft.svg"
import plus from "../../assets/plus.svg"
import { Button } from "../button/Button"
import type { Slide } from "../../../../src/types/slide"
import { SlidePreview } from "../slidePreview/SlidePreview"

type SlideListProps = {
    slides: Slide[];
}

function SlideList(props: SlideListProps) {
     const listItems = props.slides.map((slide, index) => (
        <div key={index} className={styles.slideListItem}>
            <SlidePreview slide={slide}/>
        </div>
    ))

    return (
        <div className={styles.slideListSpace}>
            <div className={styles.slideList}>
                <div className={styles.buttonWrapper}>
                    <Button imageUrl={arrowLeft} />
                </div>
                
                {listItems}
                
                <div className={styles.buttonWrapper}>
                    <Button imageUrl={plus} />
                </div>
                <div className={styles.buttonWrapper}>
                    <Button imageUrl={arrowRight} />
                </div>
            </div>
        </div>
    )
}

export { SlideList }