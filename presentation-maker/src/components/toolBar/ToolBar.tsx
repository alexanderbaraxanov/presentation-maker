import styles from "./ToolBar.module.css"
import { Button } from "../button/Button"
import addImage from "../../assets/addImage.svg"
import addText from "../../assets/addText.svg"
import redo from "../../assets/arrowRedo.svg"
import undo from "../../assets/arrowUndo.svg"
import { generateId } from "../../../../src/functions/generateId"
import { addTextObject } from "../../../../src/functions/objects"
import { dispatch } from "../../../../src/editor"
import { useContext } from "react"
import { CurrentPresentation } from "../presentationProvider/presentationProvider"

function ToolBar() {
    const presentation = useContext(CurrentPresentation)?.presentation;
    const currentSlideIndex = useContext(CurrentPresentation)?.previewSlideId;
    const currentSlideId = presentation?.slides[currentSlideIndex].id;
    return (   
        <div className={styles.toolBarSpace} >
            <div className={styles.toolBar} >
                <Button imageUrl={addText} styleImg={styles.buttonImg} styleButton={styles.toolBarButton} onClick={() => {
                    dispatch(addTextObject, {
                        slideId: currentSlideId, 
                        id: generateId(), 
                        parametersObject: {
                            locationObject: {
                                x: 10, 
                                y: 10, 
                            },
                            sizeObject: {
                                height: 100, 
                                width: 100, 
                            }
                        },
                        contentText: {
                            content: 'text',
                            style: {
                                fontFamily: 'Arial',
                                fontSize: 23,
                                fontColor: '#343412'
                            }
                        }
                    })
                }} />
                <Button imageUrl={addImage} styleImg={styles.buttonImg} styleButton={styles.toolBarButton} />
                <div className={styles.buttonConteiner}>
                    <Button imageUrl={undo} styleImg={styles.buttonImgHistory} styleButton={styles.toolBarButtonHistory}/>
                    <Button imageUrl={redo} styleImg={styles.buttonImgHistory} styleButton={styles.toolBarButtonHistory}/>
                </div>
            </div>
        </div>
    )
}

export { ToolBar }
