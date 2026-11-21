import { useEffect, useState } from "react";

function useSelection(activeSlideId: string | undefined) { //не делать опциональным 
    const [selectedObjs, setSelectedObjs] = useState<string[]>([]);
    useEffect(() => {
        setSelectedObjs([])
    }, [activeSlideId])

    const handlerSelecteObject = (e: React.MouseEvent, objectId: string) => {
        if (e.shiftKey){
            if (selectedObjs.includes(objectId)) {
                setSelectedObjs(selectedObjs.filter((id) => id !== objectId));
            } else {
                setSelectedObjs([...selectedObjs, objectId])
            }
        } else {
            setSelectedObjs([objectId]);
        }
    }
// через шифт удаление из массива
    const clearSelection = () => {
        setSelectedObjs([]);
    };

    return {
        selectedObjs,
        handlerSelecteObject,
        clearSelection,
    }
}

export {
    useSelection
}