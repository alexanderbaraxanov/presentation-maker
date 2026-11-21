import type { 
    TextObject,
    ImageObject, 
    DefaultObject, 
    Parameters,
    Point,
    Size,
    Text,
    SlideObject, 
} from "../types/objects.ts"
import type { Presentation } from "../types/presentation.ts"
import type { Slide } from "../types/slide.ts"

function createDefaultObject(id: string, parametersObject: Parameters): DefaultObject {
    return {
        id,
        parametersObject: parametersObject,
    }
}

function addTextObject(presentation: Presentation,  param: { slideId: string; id: string; parametersObject: Parameters; contentText: Text }): Presentation {
    return {
        ...presentation,
        slides: presentation.slides.map(slide => {
            if (slide.id === param.slideId) {
                const newTextObject: TextObject = {
                    ...createDefaultObject(param.id, param.parametersObject),
                    type: 'text',
                    contentObject: param.contentText, 
                };
                return {
                    ...slide,
                    slideObjects: [...slide.slideObjects, newTextObject]
                };
            }
            return slide;
        })
    };
}

function addImageObject(slide: Slide, id: string, parametersObject: Parameters, imageUrl: string): Slide {
    const newImageObject: ImageObject = {
        ...createDefaultObject(id, parametersObject),
        type: 'image',
        imageUrl: imageUrl
    }
    return {
        ...slide,
        slideObjects: [...slide.slideObjects, newImageObject]
    }
}

function removeObject(presentation: Presentation,  param: { slideId: string; objectIds: string[]}): Presentation {
    return {
        ...presentation,
        slides: presentation.slides.map(slide => {
            if (slide.id === param.slideId){
                return {
                    ...slide,
                    slideObjects: slide.slideObjects.filter(obj => !param.objectIds.includes(obj.id)), 
                }
            }
            return slide
        }) 
    }   
}

function modifyObject(slide: Slide, objectId:string, modifyFunction: (object: SlideObject) => SlideObject): Slide {
    const newSlideObjects = slide.slideObjects.map((slideObject) => {
        if (slideObject.id === objectId) {
            return modifyFunction(slideObject)
        }

        return slideObject;
    })

    return {
        ...slide,
        slideObjects: newSlideObjects,
    }
}

function resizeObject(slide: Slide, objectId: string, newSizeObject: Size): Slide {
    return modifyObject(slide, objectId, (slideObject: SlideObject) => {
        return {
            ...slideObject,
            parametersObject: {
                ...slideObject.parametersObject,
                sizeObject: newSizeObject,
            },
        }})
}

function resizeObjectPresentation(presentation: Presentation, params: { slideId: string; objectId: string; width: number; height: number }): Presentation {
    const { slideId, objectId, width, height } = params;
    return {
        ...presentation,
        slides: presentation.slides.map(slide =>
            slide.id === slideId
                ? resizeObject(slide, objectId, { width, height })
                : slide
        ),
    };
}

function moveObject(slide: Slide, objectId: string, newLocationObject: Point): Slide {
    return modifyObject(slide, objectId, (slideObject: SlideObject) => {
        return {
            ...slideObject,
            parametersObject: {
                ...slideObject.parametersObject,
                locationObject: newLocationObject,
            },
        }
    })
}

function moveObjectPresentation(presentation: Presentation, params: { slideId: string; objectId: string; x: number; y: number }): Presentation {
    const { slideId, objectId, x, y } = params;

    const updatedSlides = presentation.slides.map(slide => {
        if (slide.id === slideId) {
            return moveObject(slide, objectId, { x, y });
        }
        return slide;
    });

    return {
        ...presentation,
        slides: updatedSlides,
    };
}

function updateTextObject(slide: Slide, objectId: string, newTextStyle: Text): Slide {
    return modifyObject(slide, objectId, (slideObject: SlideObject) => {
        return {
            ...slideObject,
            contentObject: newTextStyle,
        }
    })
}

export { 
    createDefaultObject,
    addTextObject,
    addImageObject,
    removeObject,
    resizeObject,
    moveObject,
    moveObjectPresentation,
    resizeObjectPresentation,
    updateTextObject, 
}