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
    const newSlides = presentation.slides.filter(function(slide) {
        if (!(slide.id in slideIds)){
            return slide
        }
    });
    return {
        ...presentation,
        slides: newSlides,
    }   
}

function duplicateSlide(presentation: Presentation, slideId: string): Presentation {
    const duplicatedSlide = presentation.slides.find(function(slide) {
        return slide.id === slideId
    })
    if (duplicatedSlide !== undefined) {
        return {
            ...presentation,
            slides: [...presentation.slides, duplicatedSlide],
        }
    } else {
        return presentation
    }
}

function setSlideBackgroundColor(slide: Slide, color: string): Slide {
    return {
        ...slide,
        background: {
            type: 'color',
            color: color,
        }
    }
}

function setSlideBackgroundImage(slide: Slide, imageUrl: string): Slide {
    return {
        ...slide,
        background: {
            type: 'image',
            src: imageUrl,
        }
    }
}

function setSlideBackgroundGradient(slide: Slide, colors: string[], angle?: number): Slide {
    return {
        ...slide,
        background: {
            type: 'gradient',
            colors: colors,
            angle: angle,
        }
    }
}

function clearSlideBackground(slide: Slide): Slide {
    return {
        ...slide, 
        background: null,
    }
}

export {
    createDefaultSlide,
    addSlide,
    removeSlides
}