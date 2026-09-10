import type { Presentation } from "../types/presentation.ts";
import type { Slide } from "../types/slide.ts"; 

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

function removeSlides(presentation: Presentation, slideIds: string[]): Presentation {
    const newSlides = presentation.slides.filter((slide) => {
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
    const foundDuplicatedSlide = presentation.slides.filter((slide) => {
        if (slide.id === slideId){
            return slide
        }
    })
    const duplicatedSlide = structuredClone(foundDuplicatedSlide) // разобраться с функцией, как рабоатет 

    return {
        ...presentation,
        slides: [...presentation.slides, ...duplicatedSlide],
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