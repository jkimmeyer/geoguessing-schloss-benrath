import { CardVariant, HeadingColor, HeadingLevel } from '../../types';
import SbCard from '../SbCard/SbCard';
import SbHeading from '../SbHeading/SbHeading';
import instructionCardStyles from './SbInstructionCard.module.css'

interface Props {
  title: string;
  description: string;
  footer?: React.ReactNode;
}


const SbInstructionCard: React.FC<Props> = ({
  title,
  description,
  footer
}) => {
  return (
    <SbCard variant={CardVariant.Dark}>
      <SbHeading title={title} level={HeadingLevel.h3} color={HeadingColor.Light} />

      <p className={instructionCardStyles["instruction-card--description"]}>{description}</p>

      {footer &&
        <div className={instructionCardStyles["instruction-card--footer"]}>
          {footer}
        </div>
      }
    </SbCard>
  );
}

export default SbInstructionCard;
