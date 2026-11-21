import styles from "./App.module.css";
import { Menu } from "../menu/Menu";
import { Workspace } from "../workspace/Workspace";
import { PreviewOverlay } from "../PreviewOverlay/PreviewOverlay";
import { 
  getState, 
} from '../../../../src/editor.js'
import { useContext, useEffect } from "react";
import { CurrentPresentation } from "../presentationProvider/presentationProvider.js";
import { useSelection } from "../../hooks/useSelectedObjs/useSelectedObjs.tsx"
import { useDeleteSelectedObjs } from "../../hooks/useDeleteSelectedObjs/useDeleteSelectedObjs.tsx"

function App() {
    const switchMode = useContext(CurrentPresentation)?.switchIsPreview;
    const next = useContext(CurrentPresentation)?.nextSlide;
    const prev = useContext(CurrentPresentation)?.prevSlide;
    const previewMode = useContext(CurrentPresentation)?.isPreview;

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (!previewMode) return;
            
            const presentation = getState();
            if (!presentation) return;
            
            
            if (!currentIndex) {
                return
            }
            const slidesCount = presentation.slides.length;

            if (e.key === 'Escape') {
                switchMode
            } else if (e.key === 'ArrowRight' || e.key === 'Space') {
                if (currentIndex < slidesCount - 1) {
                    next
                }
            } else if (e.key === 'ArrowLeft') {
                if (currentIndex > 0) {
                    prev
                }
            }
        }) 
        
        return document.removeEventListener('keydown', (e) => {
            if (!previewMode) return;
            
            const presentation = getState();
            if (!presentation) return;
            
            
            if (!currentIndex) {
                return
            }
            const slidesCount = presentation.slides.length;

            if (e.key === 'Escape') {
                switchMode
            } else if (e.key === 'ArrowRight' || e.key === 'Space') {
                if (currentIndex < slidesCount - 1) {
                    next
                }
            } else if (e.key === 'ArrowLeft') {
                if (currentIndex > 0) {
                    prev
                }
            }
        })
    }, [])
    
    if (previewMode) {
        return (
            <PreviewOverlay />
        );
    }

    const presentationContext = useContext(CurrentPresentation)
    const slides = presentationContext?.presentation?.slides;
    const currentIndex = presentationContext?.previewSlideId;
    const currentSlide = (slides && currentIndex !== undefined) ? slides[currentIndex] : undefined;

    const {selectedObjs, handlerSelecteObject, clearSelection} = useSelection(currentSlide?.id);
    useDeleteSelectedObjs(currentSlide?.id, selectedObjs, clearSelection);

    return (
        <div 
            className={styles.siteSpace}
            onClick={(e) => {
                    const isClickOnObject = (e.target as HTMLElement).closest('[data-SlideObject="true"]');
        
                    if (!isClickOnObject) {
                        clearSelection(); 
                    }
                }}    
        >
            <Menu />
            <Workspace selectedIds={selectedObjs} handlerSelecte={handlerSelecteObject}/>
        </div>
    )
}

export {App};
