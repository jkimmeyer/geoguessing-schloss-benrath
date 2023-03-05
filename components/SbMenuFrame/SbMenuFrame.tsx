import { ReactNode } from 'react';
import { useCommunication } from '../../hooks/useCommunication';
import { BenrathObject } from '../../types';
import SbInfoCard from '../SbInfoCard/SbInfoCard';
import { SbMapOverlay } from '../SbMapOverlay/SbMapOverlay';
import { SbMenuOverlay } from '../SbMenuOverlay/SbMenuOverlay';
import SbOnboarding from '../SbOnboarding/SbOnboarding';
import { SbQuestItemsOverlay } from '../SbQuestItemsOverlay/SbQuestItemsOverlay';
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
}


const SbMenuFrame: React.FC<Props> = ({
  timer,
  logo,
  onboarding,
  toggleOnboarding,
  hiddenItems,
  foundItems,
  score
}) => {
  const { currentObjectOverlayOpen, currentBenrathObject, toggleObjectOverlay } = useCommunication();

  const buttonHandler = () => toggleObjectOverlay();

  return (
    <div className={sbMenuFrameStyles['menu-frame']}>
      <div className={sbMenuFrameStyles['menu-frame--timer']}>
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
