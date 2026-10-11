import styles from "./Workspace.module.css"
import { SlideSpace } from "../SlideSpace/SlideSpace"
import { ToolBar} from "../ToolBar/ToolBar"

function Workspace() {
    return (   
        <div className={styles.workSpace}>
            <ToolBar />
            <SlideSpace />
        </div>
    )
}

export { Workspace }