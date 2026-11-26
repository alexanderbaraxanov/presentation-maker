import styles from "./Workspace.module.css"
import { SlideSpace } from "../slideSpace/SlideSpace"
import { ToolBar} from "../toolBar/ToolBar"
import { SlideList } from "../slideList/SlideList"
import { Properties } from "../SlideProperties /SlidePropeties"
import { useContext } from "react"
import { CurrentPresentation } from '../presentationProvider/presentationProvider.tsx';

type WorkspaceProps = {
    selectedIds?: string[];
    handlerSelecte?: (e: React.MouseEvent, objectId: string) => void;
}

function Workspace(props: WorkspaceProps) {
    const presentationContext = useContext(CurrentPresentation)
    const slides = presentationContext?.presentation?.slides;
    const currentIndex = presentationContext?.previewSlideId;
    const currentSlide = (slides && currentIndex !== undefined) ? slides[currentIndex] : undefined;
    
    if (!slides || currentIndex === undefined || !currentSlide) {
        return null;
    }
    else {
        return (   
            <div className={styles.workSpace} >
                <ToolBar />
                <div className={styles.centerArea} >
                    <SlideSpace activeSlide={currentSlide} scaleSlide={1} selectedIds = {props.selectedIds} handlerSelecte={props.handlerSelecte} />
                    <SlideList />
                </div>
                <Properties />
            </div>
        )
    }
}

export { Workspace }