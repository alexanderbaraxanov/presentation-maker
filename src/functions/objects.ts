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
import type { Slide } from "../types/slide.ts"

function createDefaultObject(id: string, parametersObject: Parameters): DefaultObject {
    return {
        id: id,
        parametersObject: parametersObject,
    }
}

function addTextObject(slide: Slide, id: string, parametersObject: Parameters, contentText: Text): Slide {
    const newTextObject: TextObject = {
        ...createDefaultObject(id, parametersObject),
        type: 'text',
        contentObject: contentText, 
    }
    return {
        ...slide,
        slideObjects: [...slide.slideObjects, newTextObject]
    }
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

function removeObject(slide: Slide, objectId: string): Slide {
    return {
        ...slide,
        slideObjects: slide.slideObjects.filter((slideObject) => slideObject.id !== objectId), 
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
    updateTextObject, 
}