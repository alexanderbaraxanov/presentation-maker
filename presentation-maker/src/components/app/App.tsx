import styles from "./App.module.css";
import { Menu } from "../menu/Menu";
import { Workspace } from "../workspace/Workspace";
import type { Presentation } from "../../../../src/types/presentation";

type AppProps = {
    presentation: Presentation;
    activeSlideId: string | null;
    previewMod: boolean;
}

function App(props: AppProps) {

    return (
        <div className={styles.siteSpace}>
            <Menu />
            <Workspace presentation={props.presentation} activeSlideId={props.activeSlideId}/>
        </div>
    )
}

export {App}