import { useEffect, useState } from "react";
import { benrathObjects } from "../benrathObjects";
import { subscribe, unsubscribe } from "../lib/events";

const gameStart = () => {
  alert("Game started!")
}

const findBenrathObject = (id: string) => {
  return benrathObjects.find(benrathObject => {
    return benrathObject.friendlyId === id
  })
}

export const useCommunication = () => {
  const [currentBenrathObject, setCurrentBenrathObject] = useState(benrathObjects[0]);
  const [currentObjectOverlayOpen, setCurrentObjectOverlayOpen] = useState(false);

  const toggleObjectOverlay = () => setCurrentObjectOverlayOpen(current => !current);


  useEffect(() => {
    const objectFound = (event: CustomEvent) => {

      const benrathObjectId = event.detail.objectId;
      const benrathObject = findBenrathObject(benrathObjectId)
      if(!benrathObject){return}

      setCurrentBenrathObject(benrathObject)
      toggleObjectOverlay();
    }

    subscribe('game:started', gameStart)
    subscribe('game:objectFound', objectFound)

    return () => {
      unsubscribe('game:start', gameStart)
      unsubscribe('game:objectFound', objectFound)
    }
  });


  return {
    currentBenrathObject,
    currentObjectOverlayOpen,
    toggleObjectOverlay
  }
}
