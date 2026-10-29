import { SpaceUpdates } from "../spaceUpdates/SpaceUpdates"
import styles from "./SlidePropeties.module.css"

function Properties() {
    return (
        <div className={styles.propeties}>
            <SpaceUpdates type={'color'} />
        </div>
    )
} 

export { Properties }