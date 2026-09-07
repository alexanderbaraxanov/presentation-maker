import type { Presentation } from "../types/presentation.ts";
import type { Slide } from "../types/slide.ts";

function generateId(): string {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${randomPart}`;
} 
// написать собственную генерацию

function createDefaultSlide(id: string, slideName: string): Slide {
  return {
    id: id,
    name: slideName,
    slideObjects: [],
    background: null,
  };
}

function addSlide(presentation: Presentation, slideName?: string): Presentation  {
    const idNewSlide = generateId();
    const newSlide = createDefaultSlide(idNewSlide, slideName || `Слайд ${presentation.slides.length + 1}`);
    return {
        ...presentation,
        slides: [...presentation.slides, newSlide],
    }
}

function removeSlides(presentation: Presentation, slideIds: string[]): Presentation {
    const newSlides: Slide[] = [];
    let n: string = '';
    for (n in presentation.slides) {
        if (!(n in slideIds)) {
            const newSlide = createDefaultSlide();
            newSlides.push(newSlide);
        } 
    } 
}//дописать функцию

function setActiveSlide(presentation: Presentation, slideId: string): Presentation {
    return {
        ...presentation,
        activeSlideId: slideId,
    }
}

function duplicateSlide(presentation: Presentation, slideId: string): Presentation {

}//дописать функцию

export {
    createDefaultSlide,
    addSlide,
    removeSlides,
    setActiveSlide
}