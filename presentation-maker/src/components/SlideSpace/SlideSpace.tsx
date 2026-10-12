import styles from "./SlideSpace.module.css"
import { SlideList } from "../SlideList/SlideList"
import { ActiveSlide } from "../ActiveSlide/ActiveSlide"

function SlideSpace() {
    return (
        <div className={styles.slideSpace}>
            <ActiveSlide />
            <SlideList /> 
        </div>
    )
}

export { SlideSpace }