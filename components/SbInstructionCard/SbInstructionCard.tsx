import { CardVariant, HeadingColor, HeadingLevel, Step } from '../../types';
import SbButton from '../SbButton/SbButton';
import SbCard from '../SbCard/SbCard';
import SbHeading from '../SbHeading/SbHeading';
import instructionCardStyles from './SbInstructionCard.module.css'

interface Props {
  step: Step;
  totalSteps: number;
  nextStep: () => void;
  previousStep: () => void;
  toggleOnboarding: () => void;
}


const SbInstructionCard: React.FC<Props> = ({
  step,
  totalSteps,
  nextStep,
  previousStep,
  toggleOnboarding
}) => {
  return (
    <div className={instructionCardStyles["instruction-card"]}>
    <SbCard variant={CardVariant.Dark}>
      <div className={instructionCardStyles["instruction-card--header"]}>
        <SbHeading title={step.title} level={HeadingLevel.h3} color={HeadingColor.Light} />
      </div>

      <p className={instructionCardStyles["instruction-card--description"]}>{step.description}</p>

      <div className={instructionCardStyles["instruction-card--footer"]}>
        <div>{step.id + " von " + totalSteps}</div>
        <div>
          <switcher-l>
              {
                step.id > 1 &&
                  <SbButton onClick={() => previousStep()}>Zurück</SbButton>
              }
              {
                step.id < totalSteps &&
                <SbButton onClick={() => nextStep()}>Weiter</SbButton>
              }
              {
                step.id === totalSteps &&
                <SbButton onClick={() => toggleOnboarding()}>Loslegen</SbButton>
              }
          </switcher-l>
        </div>
      </div>
      </SbCard>
    </div>
  );
}

export default SbInstructionCard;
