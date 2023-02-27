import { CardVariant, HeadingColor, HeadingLevel } from '../../types';
import SbButton from '../SbButton/SbButton';
import SbCard from '../SbCard/SbCard';
import SbHeading from '../SbHeading/SbHeading';
import instructionCardStyles from './SbInstructionCard.module.css'

interface Props {
  title: string;
  description: string;
  step: number,
  totalSteps: number,
}


const SbInstructionCard: React.FC<Props> = ({
  title,
  description,
  step,
  totalSteps,
}) => {
  return (
    <SbCard variant={CardVariant.Dark}>
      <SbHeading title={title} level={HeadingLevel.h3} color={HeadingColor.Light} />

      <p className={instructionCardStyles["instruction-card--description"]}>{description}</p>

      <div className={instructionCardStyles["instruction-card--footer"]}>
        <div>{step + " von " + totalSteps}</div>
        <div>
          <switcher-l>
            <SbButton>Zurück</SbButton>
            <SbButton>Weiter</SbButton>
          </switcher-l>
        </div>
      </div>
    </SbCard>
  );
}

export default SbInstructionCard;
