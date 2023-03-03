import { useState } from "react";
import sbMenuFrameStyles from '../SbMenuFrame/SbMenuFrame.module.css'
import { IconNames } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import { publish } from "../../lib/events";

export const SbMapOverlay = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [mapHtml, setMapHtml] = useState("")

  const toggleMap = () => {
    if (mapOpen) {
      publish('game:resume', {})
    } else {
      publish('game:paused', {})
    }

    setMapHtml(document.getElementById("7")?.outerHTML.toString() || "")
    setMapOpen(current => !current);
  }

  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} data-map>
      <div className={sbMenuFrameStyles['menu-frame--menu-container-box']}>
        <button className={sbMenuFrameStyles['menu-frame--map']} onClick={() => toggleMap()}>
          <SbIcon icon={IconNames.Map}></SbIcon>
        </button>

        {mapOpen &&
          <div className={sbMenuFrameStyles["menu-frame--overlay-menu"]}>
            <div className="fixed-container" dangerouslySetInnerHTML={{
              __html: mapHtml
            }} />
          </div>
        }
      </div>
    </div>
  )
}
