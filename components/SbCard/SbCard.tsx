import { CardVariant } from '../../types';
import cardStyles from './SbCard.module.css'

interface Props {
  variant?: CardVariant,
  children?: React.ReactNode;
}


const SbCard: React.FC<Props> = ({
  variant = CardVariant.Light,
  children
}) => {
  return (
    <div className={cardStyles['card']} data-variant={variant}>
      {children}
    </div>
  );
}

export default SbCard;
