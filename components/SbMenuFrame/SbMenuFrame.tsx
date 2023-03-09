import { ReactNode, useState } from 'react';
import { useCommunication } from '../../hooks/useCommunication';
import { useGame } from '../../hooks/useGame';
import { publish } from '../../lib/events';
import { BenrathObject } from '../../types';
import SbInfoCard from '../SbInfoCard/SbInfoCard';
import { SbMapOverlay } from '../SbMapOverlay/SbMapOverlay';
import { SbMenuOverlay } from '../SbMenuOverlay/SbMenuOverlay';
import SbOnboarding from '../SbOnboarding/SbOnboarding';
import { SbQuestItemsOverlay } from '../SbQuestItemsOverlay/SbQuestItemsOverlay';
import SbSuccessOverlay from '../SbSuccessOverlay/SbSuccessOverlay';
import SbTourFrame from '../SbTourFrame/SbTourFrame';
import sbMenuFrameStyles from './SbMenuFrame.module.css'

interface Props {
  timer?: ReactNode;
  logo?: ReactNode;
  onboarding: boolean;
  toggleOnboarding: () => void;
  hiddenItems: BenrathObject[];
  foundItems: BenrathObject[];
  score: number;
  gameFinished: boolean;
  gameFinishedOverlayOpen: boolean;
}

const SbMenuFrame: React.FC<Props> = ({
  timer,
  logo,
  onboarding,
  toggleOnboarding,
  hiddenItems,
  foundItems,
  score,
  gameFinished,
}) => {
  const { currentObjectOverlayOpen, currentBenrathObject, toggleObjectOverlay } = useCommunication();
  const [gameFinishedOverlayOpen, setGameFinishedOverlayOpen] = useState(false)

  const buttonHandler = () => toggleObjectOverlay();

  const buttonHandlerFinished = () => {
    toggleObjectOverlay();
    if (gameFinished) {
      publish('game:paused', {})
      setGameFinishedOverlayOpen(true)
    }
  }

  const toggleGameFinishOverlay = () => {
    publish('game:resume', {})
    setGameFinishedOverlayOpen(false)
  }

  return (
    <div className={sbMenuFrameStyles['menu-frame']}>
      <div className={sbMenuFrameStyles['menu-frame--timer']}>
        { timer }
      </div>

      { currentObjectOverlayOpen &&
          <SbTourFrame>
            <SbInfoCard
              benrathObject={currentBenrathObject}
              buttonHandler={gameFinished ? buttonHandlerFinished : buttonHandler}
            />
          </SbTourFrame>
      }

      {gameFinishedOverlayOpen &&
        <SbTourFrame>
          <SbSuccessOverlay score={score} closeHandler={toggleGameFinishOverlay} />
        </SbTourFrame>
      }

      <div className={sbMenuFrameStyles['menu-frame--logo']}>
        {logo}
      </div>

      <div className={sbMenuFrameStyles['menu-frame--progress']}>
        {`${foundItems.length} von ${foundItems.length + hiddenItems.length}`}
      </div>

      <div className={sbMenuFrameStyles['menu-frame--points']}>
        {score.toString()}
      </div>

      <div className={sbMenuFrameStyles["menu-frame--container"]}>
        <SbMenuOverlay />
        <SbMapOverlay />
        <SbQuestItemsOverlay hiddenItems={hiddenItems} foundItems={foundItems} />
      </div>

      { !onboarding &&
        <SbOnboarding toggleOnboarding={toggleOnboarding}></SbOnboarding>
      }
    </div>
  );
}

export default SbMenuFrame;
