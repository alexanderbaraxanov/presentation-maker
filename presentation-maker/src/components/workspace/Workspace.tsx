import styles from "./Workspace.module.css"
import { SlideSpace } from "../slideSpace/SlideSpace"
import { ToolBar} from "../toolBar/ToolBar"
import { SlideList } from "../slideList/SlideList"
import type { Presentation } from "../../../../src/types/presentation"

type WorkspaceProps = {
    presentation: Presentation; 
    activeSlideId: string | null;
}

function Workspace(props: WorkspaceProps) {
    const activeSlide = props.presentation.slides.find((e) => { e.id == props.activeSlideId }) 
    if (!activeSlide)
    {
        return
    }
    return (   
        <div className={styles.workSpace}>
            <ToolBar />
            <SlideList slides={props.presentation.slides}/>
            <SlideSpace activeSlide={activeSlide}/>
        </div>
    )
}

export { Workspace }