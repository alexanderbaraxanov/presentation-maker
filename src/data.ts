import type { Presentation } from "./types/presentation";
import { createPresentation } from "./functions/presentation";
import type { 
    Background,
    Slide,
} from "./types/slide";
import { 
    addSlide, 
    setSlideBackground 
} from "./functions/slide";
import type { 
    Parameters,
    Text, 
} from "./types/objects";
import { addTextObject } from "./functions/objects";
import { generateId } from "./functions/generateId";

function addObjects(slide: Slide, parametersObjects: Parameters[], textObjects: Text[]): Slide {
    let i = 0;
    for(const parametersObject of parametersObjects) {
        slide = addTextObject(slide, generateId(), parametersObject, textObjects[i]);
        i++;
    }

    return slide;
}

function setSlide1(slide: Slide) {
    let backgroundSlide: Background = {
        type: 'color',
        color: '#f0f0f0'
    };
    slide = setSlideBackground(slide, backgroundSlide);

    const paramsObj: Parameters[] = [
        {
            locationObject: {
                x: 50,
                y: 50
            },
            sizeObject: {
                height: 60,
                width: 400,
            }
        },
        {
            locationObject: {
                x: 50,
                y: 120,
            },
            sizeObject: {
                height: 40,
                width: 400,
            }
        }
    ]
    const textsObj: Text[]= [
        {
            content: 'Добро пожаловать!',
            style: {
                fontFamily: 'Arial', 
                fontSize: 32, 
                fontColor: '#333333',
            }
        },
        {
            content: 'Лабораторная работа №2!',
            style: {
                fontFamily: 'Arial', 
                fontSize: 20, 
                fontColor: '#666666'
            }
        }
    ]

    slide = addObjects(slide, paramsObj, textsObj);
}

function setSlide2(slide: Slide) {
    const backgroundSlide: Background = {
        type: 'color',
        color: '#ffffff',
    };
    slide = setSlideBackground(slide, backgroundSlide);

    const paramsObj: Parameters[] = [
        {
            locationObject: {
                x: 50,
                y: 50
            },
            sizeObject: {
                height: 40,
                width: 300,
            }
        },
        {
            locationObject: {
                x: 50,
                y: 100,
            },
            sizeObject: {
                height: 30,
                width: 300,
            }
        },
        {
            locationObject: {
                x: 50,
                y: 140,
            },
            sizeObject: {
                height: 30,
                width: 300,
            }
        },
        {
            locationObject: {
                x: 50,
                y: 180,
            },
            sizeObject: {
                height: 30,
                width: 300,
            }
        }
    ]
    const textsObj: Text[] = [
        {
            content: 'Список задач:',
            style: {
                fontFamily: 'Arial', 
                fontSize: 24, 
                fontColor: '#000000',
            }
        },
        {
            content: '1. Разработать интерфейс',
            style: {
                fontFamily: 'Arial', 
                fontSize: 18, 
                fontColor: '#333333'
            }
        },
        {
            content: '2. Добавить интерактивность',
            style: {
                fontFamily: 'Arial', 
                fontSize: 18, 
                fontColor: '#333333'
            }
        },
        {
            content: '3. Выделить общие компоненты',
            style: {
                fontFamily: 'Arial', 
                fontSize: 18, 
                fontColor: '#333333'
            }
        }
    ]

    slide = addObjects(slide, paramsObj, textsObj);
}

function setSlide3(slide: Slide) {
    const backgroundSlide: Background = {
        type: 'color',
        color: '#e8f5e9',
    };
    slide = setSlideBackground(slide, backgroundSlide);

    const paramsObj: Parameters[] = [
        {
            locationObject: {
                x: 50,
                y: 50
            },
            sizeObject: {
                height: 40,
                width: 300,
            }
        },
        {
            locationObject: {
                x: 50,
                y: 120,
            },
            sizeObject: {
                height: 60,
                width: 200,
            }
        }
    ]
    const textsObj: Text[] = [
        {
            content: 'Итоги работы:',
            style: {
                fontFamily: 'Arial', 
                fontSize: 24, 
                fontColor: '#2e7d32',
            }
        },
        {
            content: 'Готово!',
            style: {
                fontFamily: 'Arial', 
                fontSize: 36, 
                fontColor: '#4caf50'
            }
        }
    ]

    slide = addObjects(slide,paramsObj, textsObj);
}

function createTestPresentation(): Presentation {
    let presentation = createPresentation('New_Presentation', generateId());

    presentation = addSlide(presentation, generateId(), 'Титульный лист');
    presentation = addSlide(presentation, generateId(), 'Список');
    presentation = addSlide(presentation, generateId(), 'Итоги')

    let slide1 = presentation.slides[0];
    let slide2 = presentation.slides[1]; 
    let slide3 = presentation.slides[2];

    setSlide1(slide1);
    setSlide2(slide2);
    setSlide3(slide3);

    return presentation;
} 

export { createTestPresentation };