import { benrathObjects } from "../benrathObjects";
import { BenrathObject } from "../types";

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a: BenrathObject[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


export function useGame() {
  const nextQuestItems = shuffle(benrathObjects).slice(0, 3)
  const foundQuestItems = benrathObjects.slice(4, 11)

  return {
    nextQuestItems,
    foundQuestItems
  }
}
