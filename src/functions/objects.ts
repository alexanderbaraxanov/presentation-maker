import type { TextObject, ImageObject, Point, Size, Text } from "../types/objects.ts"
import type { Slide } from "../types/slide.ts"

function generateId(): string {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomPart}`;
} 
//function addObject(): Slide {
//    
//} дописать функцию

function addTextObject(slide: Slide, id: string, location: Point, sizeObject: Size, textObject: Text): Slide {
    const newTextObject: TextObject = {
        id: id,
        location: location,
        sizeObject: sizeObject,
        type: 'text',
        textObject: textObject 
    }
    return {
        ...slide,
        slideObjects: [...slide.slideObjects, newTextObject]
    }
}

function addImageObject(slide: Slide, id: string, imageUrl: string, location: Point, sizeObject: Size): Slide {
    const newTextObject: ImageObject = {
        id: id,
        location: location,
        sizeObject: sizeObject,
        type: 'image',
        imageUrl: imageUrl
    }
    return {
        ...slide,
        slideObjects: [...slide.slideObjects, newTextObject]
    }
}

function removeObject(slide: Slide, objectId: string): Slide {
    const newSlideObjects = slide.slideObjects.filter((slideObject) => {
        if (slideObject.id !== objectId){
            return slideObject
        }
    });
    return {
        ...slide,
        slideObjects: newSlideObjects,
    }
}

function moveObject(slide: Slide, objectId: string, newLocation: Point): Slide {
    const newSlideObjects = slide.slideObjects.map((slideObject) => {
        if (slideObject.id === objectId) {
            return {
                ...slideObject,
                location: newLocation,
            }
        }

        return {
            ...slideObject
        }
    })
    return {
        ...slide,
        slideObjects: newSlideObjects,
    }
}

function resizeObject(slide: Slide, objectId: string, newSizeObject: Size): Slide {
    const newSlideObjects = slide.slideObjects.map((slideObject) => {
        if (slideObject.id === objectId) {
            return {
                ...slideObject,
                sizeObject: newSizeObject,
            }
        }

        return {
            ...slideObject
        }
    })
    return {
        ...slide,
        slideObjects: newSlideObjects,
    }
} 

function updateTextObjectStyle(slide: Slide, objectId: string, fontFamily: string, fontSize: number, fontColor: string): Slide {
    const newSlideObjects = slide.slideObjects.map((slideObject) => {
        if (slideObject.id === objectId) {
            return {
                ...slideObject,
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontColor: fontColor,
            }
        }

        return {
            ...slideObject
        }
    })
    return {
        ...slide,
        slideObjects: newSlideObjects,
    }
}

export { generateId }