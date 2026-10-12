import type { Presentation } from "../types/presentation.ts";
import type { Slide, Background } from "../types/slide.ts"; 

function createDefaultSlide(id: string, slideName: string): Slide {
  return {
    id: id,
    name: slideName,
    slideObjects: [],
    background: null,
  };
}

function addSlide(presentation: Presentation, newSlideId: string, slideName?: string): Presentation  {
    const newSlide = createDefaultSlide(newSlideId, slideName || `Слайд ${presentation.slides.length + 1}`);
    return {
        ...presentation,
        slides: [...presentation.slides, newSlide],
    }
}

function removeSlide(presentation: Presentation, slideIds: string[]): Presentation {
    const newSlides = presentation.slides.filter((slide) => {
        return !slideIds.includes(slide.id);
    });
    return {
        ...presentation,
        slides: newSlides,
    }   
}

function moveSlide(presentation: Presentation, slideId: string, newIndex: number): Presentation {
    const slideIndex = presentation.slides.findIndex((slide) => {
        return slide.id === slideId
    }); 

    if ((newIndex < 0 || newIndex >= presentation.slides.length) || (newIndex === slideIndex)) {
        return presentation;
    }

    const updatedSlides = presentation.slides.toSpliced(slideIndex, 1).toSpliced(newIndex, 0, presentation.slides[slideIndex]);
    
    return {
        ...presentation,
        slides: updatedSlides,
    }
}

function duplicateSlide(presentation: Presentation, slideId: string, newSlideId: string): Presentation {
    const foundDuplicatedSlides = presentation.slides.find((slide => slide.id === slideId));
    if (!foundDuplicatedSlides) {
        return presentation;
    }

    const newDuplicatedSlides: Slide = {
        ...structuredClone(foundDuplicatedSlides) ,
        id: newSlideId,
    }

    return {
        ...presentation,
        slides: [...presentation.slides, newDuplicatedSlides],
    }
} 

function setSlideBackground(slide: Slide, background: Background): Slide {
    return {
        ...slide, 
        background: background,
    }
}

export {
    createDefaultSlide,
    addSlide,
    removeSlide,
    moveSlide,
    duplicateSlide,
    setSlideBackground,
}