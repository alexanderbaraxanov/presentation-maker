import type { SlideObject } from "../../../../src/types/objects"

type SlideObjectProps = {
    slideObject: SlideObject,
    onSelect?: (e: React.MouseEvent, objectId: string) => void,
    isSelected?: boolean,
    onMouseDown?: (e: React.MouseEvent) => void,
    onResizeStart?: (e: React.MouseEvent) => void,
}

function SlideObj(props: SlideObjectProps) {
    let objectStyle = {}
    switch (props.slideObject.type) {
        case 'text':
            objectStyle = {
                display: 'block',
                position: 'absolute',
                boxSizing: 'border-box',
                left: props.slideObject.parametersObject.locationObject.x,
                top: props.slideObject.parametersObject.locationObject.y,
                height: props.slideObject.parametersObject.sizeObject.height,
                width: props.slideObject.parametersObject.sizeObject.width,
                fontFamily: props.slideObject.contentObject.style.fontFamily,
                color: props.slideObject.contentObject.style.fontColor,
                fontSize: props.slideObject.contentObject.style.fontSize,
                outline: props.isSelected ? '2px solid #007bff' : '1px solid transparent',
            }  

            return (
                <span 
                    style={objectStyle} 
                    data-SlideObject="true"
                    onClick={(e) => {
                        props.onSelect?.(e, props.slideObject.id); 
                    }}
                    onMouseDown={props.onMouseDown}
                >
                    {props.slideObject.contentObject.content}
                </span>
            )
        
        case 'image':
            objectStyle = {
                display: 'block',
                position: 'absolute',
                left: props.slideObject.parametersObject.locationObject.x,
                top: props.slideObject.parametersObject.locationObject.y,
                height: props.slideObject.parametersObject.sizeObject.height,
                width: props.slideObject.parametersObject.sizeObject.width,
                outline: props.isSelected ? '2px solid #007bff' : '1px solid transparent',
            };

            return (
                <img style={objectStyle} src={props.slideObject.imageUrl} />
            )      

        default:            
            return (
                <div 
                    style={objectStyle} 
                    data-slide-object="true"
                    onClick={(e) => {
                        props.onSelect?.(e, props.slideObject.id); 
                    }} 
                    onMouseDown={props.onMouseDown}
                >
                    
                </div>
            );
    }
}

export { SlideObj }