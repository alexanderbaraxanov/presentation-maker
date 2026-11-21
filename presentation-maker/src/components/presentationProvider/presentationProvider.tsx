import { createContext, useEffect, useState, type ReactNode } from "react";
import { addEditorChangeHandler, getState } from "../../../../src/editor";
import type { Presentation } from "../../../../src/types/presentation";

type UiPresentation = {
    presentation: Presentation | null,
    isPreview: boolean,
    previewSlideId: number,
    switchIsPreview: () => void,
    nextSlide: () => void,
    prevSlide: () => void,
}
const CurrentPresentation = createContext<UiPresentation | null>(null)

type ProviderProps = {
    children: ReactNode;
};

function PresentationProvider (app: ProviderProps ) {
    const [data, setData] = useState<Presentation | null>(() =>  getState());

    if(!data){
        return
    }

    const [isPreview, setIsPreview] = useState(false);
    const [previewSlideId, setPreviewSlideId] = useState(0);

    useEffect(() => {   
        const CurrentState = () => {
            setData(getState())
        }
        addEditorChangeHandler(CurrentState)
    }, [])
    
    const switchPreview = () => {
        setIsPreview(!isPreview)
    }

    const nextSlideId = () => {
        const nextSlideId = previewSlideId + 1; 
        if (nextSlideId < data.slides.length) {
            setPreviewSlideId(nextSlideId)
        }
    }

    const prevSlideId = () => {
        const prevSlideId = previewSlideId - 1; 
        if (prevSlideId >= 0) {
            setPreviewSlideId(prevSlideId)
        }   
    }

    return (
        <CurrentPresentation.Provider value={{
            presentation: data,
            isPreview: isPreview,
            switchIsPreview: switchPreview,
            previewSlideId: previewSlideId,
            nextSlide: nextSlideId,
            prevSlide: prevSlideId,
        }}>
            {app.children}
        </CurrentPresentation.Provider>
    );
}

export {
    CurrentPresentation,
    PresentationProvider,
}