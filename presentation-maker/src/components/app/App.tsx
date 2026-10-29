import styles from "./App.module.css";
import { Menu } from "../menu/Menu";
import { Workspace } from "../workspace/Workspace";
import { getPreviewMode } from "../../../../src/editor";
import type { Presentation } from "../../../../src/types/presentation";
import  { PreviewOverlay } from "../PreviewOverlay/PreviewOverlay";

type AppProps = {
    presentation: Presentation;
    activeSlideId: string | null;
    previewMod: boolean;
}

function App(props: AppProps) {
       if (getPreviewMode()) {
           return (
               <PreviewOverlay presentation={props.presentation} activeSlideId={props.activeSlideId}/>
           );
       }

       return (
           <div className={styles.siteSpace}>
               <Menu />
               <Workspace presentation={props.presentation} activeSlideId={props.activeSlideId}/>
           </div>
       )
}

export {App};