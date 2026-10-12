import styles from "./Menu.module.css"
import { Button } from "../Button/Button"
import urlIcon from "../../assets/icon.svg"
import plus from "../../assets/plus.svg"
import save from "../../assets/save.svg"
import load from "../../assets/load.svg"
import startSlide from "../../assets/startButton.svg"

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
            <input className={styles.menuNameSpace} placeholder="Название презентации..." />
            <div className={styles.menuElement}>
                <Button text="Слайд-шоу" styleButton={styles.buttonSlideStart} imageUrl={startSlide} styleImg={styles.startSlideImg} />
            </div>
        </div>
    )
}

export { Menu } 