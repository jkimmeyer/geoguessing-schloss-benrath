import { useEffect, useState } from "react";
import { benrathObjects } from "../benrathObjects";
import { publish, subscribe, unsubscribe } from "../lib/events";
import { BenrathObject } from "../types";

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
const shuffle = (a: BenrathObject[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const findBenrathObject = (hiddenItems: BenrathObject[], id: string) => {
  return hiddenItems.find(benrathObject => {
    return benrathObject.friendlyId === id
  })
}

const questItems = shuffle(benrathObjects)

questItems.map((questItem, index) => {
  questItem.id = index
})

export function useGame() {
  const [foundItems, setFoundItems] = useState<BenrathObject[]>([]);
  const [hiddenItems, setHiddenItems] = useState(questItems);
  const [currentItemId, setCurrentItemId] = useState(0);
  const [score, setScore] = useState(0);

  const objectFound = (event: CustomEvent) => {
    const benrathObjectId = event.detail.objectId;
    const benrathObject = findBenrathObject(hiddenItems, benrathObjectId)
    const foundBenrathObject = findBenrathObject(foundItems, benrathObjectId)

    if (!benrathObject || benrathObject.id != currentItemId) { return }
    if (foundBenrathObject) {
      alert("Diesen Gegenstand hast du schon gefunden!")
      return
    }

    setHiddenItems((current) => current.filter((item) => item.id != currentItemId))
    setFoundItems((foundItems) => [...foundItems, benrathObject])
    setCurrentItemId(current => current + 1)
    publish("game:addScore", {})
  }

  const addScoreCallback = (event: CustomEvent) => {
    // TODO: Score calculations
    setScore(current => current + 10)
  }


  useEffect(() => {
    subscribe('game:objectFound', objectFound)
    subscribe('game:addScoreCallback', addScoreCallback)

    return () => {
      unsubscribe('game:objectFound', objectFound)
      unsubscribe('game:addScoreCallback', addScoreCallback)
    }
  })

  questItems.sort((a, b) => (a.id || 0) - (b.id || 0))


  return {
    foundItems,
    hiddenItems,
    score,
    setScore
  }
}
