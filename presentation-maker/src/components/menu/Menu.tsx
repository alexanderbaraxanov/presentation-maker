import styles from "./Menu.module.css"
import { Button } from "../button/Button"
import urlIcon from "../../assets/icon.svg"
import plus from "../../assets/plus.svg"
import save from "../../assets/save.svg"
import load from "../../assets/load.svg"
import startSlide from "../../assets/startButton.svg"
import { SpaceUpdates } from "../spaceUpdates/SpaceUpdates"
import { setPreviewMode } from "../../../../src/editor"



function Menu() {
    return (
        <div className={styles.menu} >
            <img className={styles.icon} src={urlIcon} />
            <div className={styles.menuElement}>
                <Button text="Новая презентация" styleButton={styles.buttonNewPresentation}  imageUrl={plus} styleImg={styles.menuImg} />
                <div className={styles.spaceSaveAndLoad}>
                    <Button styleButton={styles.buttonSaveAndLoad} imageUrl={save} styleImg={styles.menuImg} /> 
                    <Button styleButton={styles.buttonSaveAndLoad} imageUrl={load} styleImg={styles.menuImg} />
                </div>
            </div>
            <SpaceUpdates name="namePresentation" className={styles.menuNameSpace} type="text" plaseholder="Название презентации..."/>
            <div className={styles.menuElement}>
                <Button text="Слайд-шоу" styleButton={styles.buttonSlideStart} imageUrl={startSlide} styleImg={styles.startSlideImg} onClick={() => {setPreviewMode(true)}}/>
            </div>
        </div>
    )
}

export { Menu } 