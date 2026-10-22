import styles from "./ToolBar.module.css"
import { Button } from "../button/Button"
import addImage from "../../assets/addImage.svg"
import addText from "../../assets/addText.svg"

function ToolBar() {
    return (
        <div className={styles.toolBarSpace}>
            <div className={styles.toolBar}>
                <Button imageUrl={addText} styleImg={styles.buttonImg} styleButton={styles.toolBarButton} />
                <Button imageUrl={addImage} styleImg={styles.buttonImg} styleButton={styles.toolBarButton} />
            </div>
        </div>
    )
}

export { ToolBar }
