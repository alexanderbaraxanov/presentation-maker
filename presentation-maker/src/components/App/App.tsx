import styles from "./App.module.css";
import { Menu } from "../Menu/Menu";
import { Workspace } from "../Workspace/Workspace";

function App() {
    return (
        <div className={styles.siteSpace}>
            <Menu />
            <Workspace />
        </div>
    )
}

export {App}