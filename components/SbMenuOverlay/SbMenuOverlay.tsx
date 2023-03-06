import { useState } from "react";
import { IconNames } from "../../types";
import SbIcon from "../SbIcon/SbIcon";
import SbTourMenu from "../SbTourMenu/SbTourMenu";
import sbMenuFrameStyles from '../SbMenuFrame/SbMenuFrame.module.css'
import { publish } from "../../lib/events";

export const SbMenuOverlay = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      publish('game:resume', {})
    } else {
      publish('game:paused', {})
    }

    setMenuOpen(current => !current)
  };

  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} data-menu>
      <div className={sbMenuFrameStyles['menu-frame--menu-container-box']}>

        {menuOpen &&
          <div className={sbMenuFrameStyles["menu-frame--overlay-menu"]}>
            <SbTourMenu />
          </div>
        }

        <button className={sbMenuFrameStyles['menu-frame--menu']} onClick={() => toggleMenu()}>
          <SbIcon icon={IconNames.Menu}></SbIcon>
        </button>
      </div>
    </div>
  )
}