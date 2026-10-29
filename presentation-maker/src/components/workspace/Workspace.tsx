import styles from "./Workspace.module.css"
import { SlideSpace } from "../slideSpace/SlideSpace"
import { ToolBar} from "../toolBar/ToolBar"
import { SlideList } from "../slideList/SlideList"
import type { Presentation } from "../../../../src/types/presentation"
import { getPreviewSlideIndex } from "../../../../src/editor"
import { Properties } from "../SlideProperties /SlidePropeties"

type WorkspaceProps = {
    presentation: Presentation; 
    activeSlideId: string | null;
}

function Workspace(props: WorkspaceProps) {
    const currentIndex = getPreviewSlideIndex();
    const currentSlide = props.presentation.slides[currentIndex];
    if (!currentSlide) {
        return null
    } 
    else {
        return (   
            <div className={styles.workSpace}>
                <ToolBar />
                <div className={styles.centerArea}>
                    <SlideSpace activeSlide={currentSlide} scaleSlide={1}/>
                    <SlideList presentation={props.presentation}/>
                </div>
                <Properties/>
            </div>
        )
    }
}

export { Workspace }