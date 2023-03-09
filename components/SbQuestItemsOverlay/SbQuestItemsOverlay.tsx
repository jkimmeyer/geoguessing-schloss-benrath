import { useCallback, useEffect, useState } from "react";
import { BenrathObject, IconNames } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import SbQuestItems from "../SbQuestItems/SbQuestItems";
import sbMenuFrameStyles from '../SbMenuFrame/SbMenuFrame.module.css'
import { publish } from "../../lib/events";

interface Props {
  hiddenItems: BenrathObject[];
  foundItems: BenrathObject[];
}

export const SbQuestItemsOverlay = (props: Props) => {
  const [questItemsOpen, setQuestItemsOpen] = useState(false);

  const toggleQuestItemsOpen = () => {
    if (questItemsOpen) {
      publish('game:resume', {})
    } else {
      publish('game:paused', {})
    }

    setQuestItemsOpen(current => !current)
  }

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (questItemsOpen) {
        publish('game:resume', {})
      }

      setQuestItemsOpen(false)
    }
  }, [questItemsOpen]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} data-quest>
      <div className={sbMenuFrameStyles['menu-frame--menu-container-box']}>
        <button className={sbMenuFrameStyles['menu-frame--help']} onClick={() => toggleQuestItemsOpen()}>
          <SbIcon icon={IconNames.CurrentObjects}></SbIcon>
        </button>

        {questItemsOpen &&
          <div className={sbMenuFrameStyles["menu-frame--overlay-menu"]}>
            <SbQuestItems hiddenItems={props.hiddenItems} foundItems={props.foundItems} />
          </div>
        }
      </div>
    </div>
  )
}
