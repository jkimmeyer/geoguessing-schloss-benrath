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


  interface Time {
    [time: string]: number;
  }

  const addScoreCallback = (event: CustomEvent) => {
    const SECONDS_TO_FIND_OBJECTS = 180
    const timeForLast: Time = event.detail.timeForLast;
    const currentTime: Time = event.detail.currentTime;
    let duration = 0;

    for (const [key, value] of Object.entries(currentTime)) {
      // Duration per Key
      const durationPerKey = value - timeForLast[key];
      if (key === 'seconds') {
        duration += durationPerKey
      } else if (key === 'minutes') {
        duration += (durationPerKey) * 60;
      } else {
        duration += durationPerKey * 3600;
      }
    }

    if (duration >= SECONDS_TO_FIND_OBJECTS || duration === 0) {
      setScore(current => current + 0)
    } else {
      setScore(current => (current + SECONDS_TO_FIND_OBJECTS - duration))
    }
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
