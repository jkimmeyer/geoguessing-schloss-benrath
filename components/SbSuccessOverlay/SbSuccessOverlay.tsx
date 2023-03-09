import { HeadingLevel } from "../../types";
import Image from 'next/image';
import SbButton from "../SbButton/SbButton";
import SbCard from "../SbCard/SbCard";
import SbHeading from "../SbHeading/SbHeading";
import successOverlayStyles from './SbSuccessOverlay.module.css'
import successImage from '../../assets/images/success.jpg'

interface Props {
  score: number;
  closeHandler: () => void;
}

const SbSuccessOverlay: React.FC<Props> = ({
  score,
  closeHandler
}) => {
  return (
    <div className={successOverlayStyles["success-overlay"]}>
      <SbCard>
        <div className={successOverlayStyles["success-overlay--content"]}>
          <SbHeading title={"Herzlichen Glückwunsch!"} level={HeadingLevel.h2} />
          <div className={successOverlayStyles["success-overlay--message"]}>
            <Image className={successOverlayStyles["success-overlay--image"]} alt="Eine Figur bereit zur Restauration" src={successImage} />
            <div>
              <p>Du hast alle Objekte gefunden!</p>
              <p>Insgesamt hast du eine Punktzahl von {score} Punkten erreicht!</p>
            </div>
          </div>
        </div>

        <div className={successOverlayStyles["success-overlay--button"]}>
          <SbButton onClick={() => closeHandler()}>Weiter erforschen</SbButton>
          <SbButton href="/leaderboard">Weiter zur Rangliste</SbButton>
        </div>
      </SbCard>
    </div>
  );
}

export default SbSuccessOverlay;
