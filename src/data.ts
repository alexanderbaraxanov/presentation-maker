import type { Presentation } from "./types/presentation";
import type { SlideObject } from "./types/slide";
import { generateId } from "./functions/generateId";

function addTextObject(x: number, y: number, height: number, width: number, content: string, fontSize: number, fontColor: string): SlideObject {
    return (
        {
            id: generateId(),
            parametersObject: {
                locationObject: {
                    x,
                    y,
                },
                sizeObject: {
                    height,
                    width,
                }
            },
            type: 'text',
            contentObject: {
                content,
                style: {
                    fontFamily: 'Arial', 
                    fontSize, 
                    fontColor,
                }
            },
        }
    )
}

function createTestPresentation(): Presentation {
    const presentation: Presentation = {
        id: generateId(),
        name: 'New Presentation',
        slides: [         
            {
                id: generateId(),
                name: 'slide1',
                slideObjects: [
                    addTextObject(50, 50, 60, 400, 'Добро пожаловать!', 32, '#333333'),
                    addTextObject(50, 120, 40, 400, 'Лабораторная работа №2!', 20, '#666666'),                   
                ],
                background: {
                    type: 'color',
                    color: '#ffffff',
                },
            },
            {
                id: generateId(),
                name: 'slide2',
                slideObjects: [
                    addTextObject(50, 50, 40, 300, 'Список задач:', 24, '#000000'),
                    addTextObject(50, 100, 30, 300, '1. Разработать интерфейс', 18, '#333333'),
                    addTextObject(50, 140, 30, 300, '2. Добавить интерактивность', 18, '#333333'),
                    addTextObject(50, 180, 30, 300, '3. Выделить общие компоненты', 18, '#333333'),
                ],
                background:{
                    type: 'color',
                    color: '#e8f5e9',
                },
            },
            {
                id: generateId(),
                name: 'slide3',
                slideObjects: [
                    addTextObject(50, 50, 40, 300, 'Итоги работы:', 24, '#2e7d32'),
                    addTextObject(50, 120, 60, 200, 'Готово!', 36, '#4caf50'),
                ],
                background: {
                    type: 'color',
                    color: '#f0f0f0' 
                },
            },
        ]
    };

    return presentation;
} 
    
export { createTestPresentation };