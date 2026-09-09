import type { TextObject, ImageObject } from "../types/objects.ts"
import type { Slide } from "../types/slide.ts"

function addTextObject(slide: Slide, id: string, content: string, x: number, y: number, width: number, height: number, fontFamily: string, fontSize: number, fontColor: string): Slide {
    const newTextObject: TextObject = {
        id: id,
        location: {
            x: x,
            y: y,
        },
        height: height,
        width: width,
        type: 'text',
        content: content,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontColor: fontColor,
    }
    return {
        ...slide,
        slideObjects: [...slide.slideObjects, newTextObject]
    }
}

function addImageObject(slide: Slide, id: string, imageUrl: string, x: number, y: number, width: number, height: number): Slide {
    const newTextObject: ImageObject = {
        id: id,
        location: {
            x: x,
            y: y,
        },
        height: height,
        width: width,
        type: 'image',
        imageUrl: imageUrl
    }
    return {
        ...slide,
        slideObjects: [...slide.slideObjects, newTextObject]
    }
}

function removeObject(slide: Slide, objectId: string): Slide {
    const newSlideObjects = slide.slideObjects.filter(function(slideObject) {
        if (slideObject.id !== objectId){
            return slideObject
        }
    });
    return {
        ...slide,
        slideObjects: newSlideObjects,
    }
}

function moveObject(slide: Slide, objectId: string, newX: number, newY: number): Slide {
    const newSlideObjects = slide.slideObjects.map(function(slideObject) {
        if (slideObject.id === objectId) {
            return {
                ...slideObject,
                location: {
                    x: newX,
                    y: newY,
                }
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

function resizeObject(slide: Slide, objectId: string, newWidth: number, newHeight: number): Slide {
    const newSlideObjects = slide.slideObjects.map(function(slideObject) {
        if (slideObject.id === objectId) {
            return {
                ...slideObject,
                height: newWidth,
                width: newHeight,
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
    const newSlideObjects = slide.slideObjects.map(function(slideObject) {
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