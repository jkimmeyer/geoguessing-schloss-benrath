import { useState } from "react";
import sbMenuFrameStyles from '../SbMenuFrame/SbMenuFrame.module.css'
import { IconNames } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import { publish } from "../../lib/events";

export const SbMapOverlay = () => {
  const [mapOpen, setMapOpen] = useState(false);

  const resume = (map: HTMLElement | null) => {
    publish('game:resume', { noOverlay: true })

    if (map) {
      map.style.display = "none";
    }

    setMapOpen(false);
  }

  const pause = (map: HTMLElement | null) => {
    publish('game:paused', { noOverlay: true })

    if (map) {
      map.style.display = "block";
    }
    setMapOpen(true);
  }

  const toggleMap = () => {
    const map = document.getElementById("7");

    if (mapOpen) {
      resume(map)
    } else {
      map?.addEventListener("click", () => {
        resume(map)
      });
      pause(map)
    }
  }

  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} data-map>
      <button className={sbMenuFrameStyles['menu-frame--map']} onClick={() => toggleMap()}>
        <SbIcon icon={IconNames.Map}></SbIcon>
      </button>
    </div>
  )
}
