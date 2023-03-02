import { ReactNode, useState } from 'react';
import { useCommunication } from '../../hooks/useCommunication';
import { IconNames } from '../../types';
import SbIcon from '../SbIcon/SbIcon';
import SbInfoCard from '../SbInfoCard/SbInfoCard';
import SbOnboarding from '../SbOnboarding/SbOnboarding';
import SbQuestItems from '../SbQuestItems/SbQuestItems';
import SbTourFrame from '../SbTourFrame/SbTourFrame';
import SbTourMenu from '../SbTourMenu/SbTourMenu';
import sbMenuFrameStyles from './SbMenuFrame.module.css'

interface Props {
  timer?: ReactNode;
  logo?: ReactNode;
  progress?: ReactNode;
  points?: ReactNode;
  closeOverlay: () => void;
  onboarding: boolean;
  toggleOnboarding: () => void;
}

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(current => !current);

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

const QuestItems = () => {
  const [questItemsOpen, setQuestItemsOpen] = useState(false);

  const toggleQuestItemsOpen = () => setQuestItemsOpen(current => !current);

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

const Map = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [mapHtml, setMapHtml] = useState("")

  const toggleMap = () => {
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
            }}/>
          </div>
        }
      </div>
    </div>
  )
}

const SbMenuFrame: React.FC<Props> = ({
  timer,
  logo,
  progress,
  points,
  closeOverlay,
  onboarding,
  toggleOnboarding
}) => {
  const { currentObjectOverlayOpen, currentBenrathObject, toggleObjectOverlay } = useCommunication();


  const buttonHandler = () => toggleObjectOverlay();

  return (
    <div className={sbMenuFrameStyles['menu-frame']}>
      <div className={sbMenuFrameStyles['menu-frame--timer']} onClick={() => closeOverlay()}>
        { timer }
      </div>

      { currentObjectOverlayOpen &&
          <SbTourFrame>
            <SbInfoCard benrathObject={currentBenrathObject} buttonHandler={buttonHandler} />
          </SbTourFrame>
      }


      <div className={sbMenuFrameStyles['menu-frame--logo']}>
        {logo}
      </div>

      <div className={sbMenuFrameStyles['menu-frame--progress']}>
        {progress}
      </div>

      <div className={sbMenuFrameStyles['menu-frame--points']}>
        {points}
      </div>

      <div className={sbMenuFrameStyles["menu-frame--container"]}>
        <Menu />
        <Map />
        <QuestItems />
      </div>

      { !onboarding &&
        <SbOnboarding toggleOnboarding={toggleOnboarding}></SbOnboarding>
      }
    </div>
  );
}

export default SbMenuFrame;
