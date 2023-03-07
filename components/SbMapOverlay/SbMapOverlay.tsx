import { useState } from "react";
import sbMenuFrameStyles from '../SbMenuFrame/SbMenuFrame.module.css'
import { IconNames } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import { publish } from "../../lib/events";

export const SbMapOverlay = () => {
  const [mapOpen, setMapOpen] = useState(false);

  const toggleMap = () => {
    const map = document.getElementById("7");

    if (mapOpen) {
      publish('game:resume', {noOverlay: true})

      if (map) {
        map.style.display = "none";
      }
    } else {
      publish('game:paused', { noOverlay: true })

      if (map) {
        map.style.display = "block";
      }
    }

    setMapOpen(current => !current);
  }



  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} data-map>
      <button className={sbMenuFrameStyles['menu-frame--map']} onClick={() => toggleMap()}>
        <SbIcon icon={IconNames.Map}></SbIcon>
      </button>
    </div>
  )
}
