import styles from "./Menu.module.css"
import urlIcon from "../../assets/icon.svg"
import plus from "../../assets/plus.svg"
import save from "../../assets/save.svg"
import load from "../../assets/load.svg"

function Menu() {
    return (
        <div className={styles.menu} >
            <img className={styles.icon} src={urlIcon} />
            <div className={styles.menuElement}>
                <button className={styles.newPresentation}>
                    <span>Новая презентация</span>
                    <img className={styles.menuImg} src={plus} />
                </button>
                <div className={styles.saveAndLoad}>
                    <button className={styles.buttonSaveAndLoad}>
                        <img className={styles.menuImg} src={save} />
                    </button>
                    <button className={styles.buttonSaveAndLoad}>
                        <img className={styles.menuImg} src={load} />
                    </button>
                </div>
            </div>
            <input className={styles.menuNameSpace} placeholder="Название презентации..." />
        </div>
    )
}

export { Menu } 