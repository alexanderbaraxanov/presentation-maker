import type { SlideObject } from "../../../../src/types/objects"

type SlideObjectProps = {
    slideObject: SlideObject
}

function SlideObj(props: SlideObjectProps) {
    let objectStyle = {}
    switch (props.slideObject.type) {
        case 'text':
            objectStyle = {
                display: 'block',
                position: 'absolute',
                left: props.slideObject.parametersObject.locationObject.x,
                top: props.slideObject.parametersObject.locationObject.y,
                height: props.slideObject.parametersObject.sizeObject.height,
                width: props.slideObject.parametersObject.sizeObject.width,
                fontFamily: props.slideObject.contentObject.style.fontFamily,
                color: props.slideObject.contentObject.style.fontColor,
                fontSize: props.slideObject.contentObject.style.fontSize,
            }  

            return (
                <span style={objectStyle}>
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
            };

            return (
                <img style={objectStyle} src={props.slideObject.imageUrl} />
            )      

        default:
            break;
    }

    return (
        <div style={objectStyle}>
            
        </div>
    )
}

export { SlideObj }