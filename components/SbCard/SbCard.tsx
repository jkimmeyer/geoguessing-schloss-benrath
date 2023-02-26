import cardStyles from './SbCard.module.css'

interface Props {
  children?: React.ReactNode;
}


const SbCard: React.FC<Props> = ({
  children
}) => {
  return (
    <div className={cardStyles['card']}>
      {children}
    </div>
  );
}

export default SbCard;
