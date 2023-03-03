import { useEffect, useState } from "react";
import { benrathObjects } from "../benrathObjects";
import { publish, subscribe, unsubscribe } from "../lib/events";

const findBenrathObject = (id: string) => {
  return benrathObjects.find(benrathObject => {
    return benrathObject.friendlyId === id
  })
}

export const useCommunication = () => {
  const [currentBenrathObject, setCurrentBenrathObject] = useState(benrathObjects[0]);
  const [currentObjectOverlayOpen, setCurrentObjectOverlayOpen] = useState(false);

  const toggleObjectOverlay = () => {
    if (currentObjectOverlayOpen) {
      publish('game:resume', {})
    } else {
      publish('game:paused', {})
    }

    setCurrentObjectOverlayOpen(current => !current);
  }


  useEffect(() => {
    const objectFound = (event: CustomEvent) => {

      const benrathObjectId = event.detail.objectId;
      const benrathObject = findBenrathObject(benrathObjectId)
      if(!benrathObject){return}

      setCurrentBenrathObject(benrathObject)
      toggleObjectOverlay();
    }

    subscribe('game:objectFound', objectFound)

    return () => {
      unsubscribe('game:objectFound', objectFound)
    }
  });


  return {
    currentBenrathObject,
    currentObjectOverlayOpen,
    toggleObjectOverlay
  }
}
