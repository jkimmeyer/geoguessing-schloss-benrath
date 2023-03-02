import { useState } from "react";
import { IconNames } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import SbQuestItems from "../SbQuestItems/SbQuestItems";
import sbMenuFrameStyles from '../SbMenuFrame/SbMenuFrame.module.css'
import { publish } from "../../lib/events";

export const SbQuestItemsOverlay = () => {
  const [questItemsOpen, setQuestItemsOpen] = useState(false);

  const toggleQuestItemsOpen = () => {
    if (questItemsOpen) {
      publish('game:resume', {})
    } else {
      publish('game:paused', {})
    }

    setQuestItemsOpen(current => !current)
  }

  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} data-quest>
      <div className={sbMenuFrameStyles['menu-frame--menu-container-box']}>
        <button className={sbMenuFrameStyles['menu-frame--help']} onClick={() => toggleQuestItemsOpen()}>
          <SbIcon icon={IconNames.CurrentObjects}></SbIcon>
        </button>

        {questItemsOpen &&
          <div className={sbMenuFrameStyles["menu-frame--overlay-menu"]}>
            <SbQuestItems />
          </div>
        }
      </div>
    </div>
  )
}
