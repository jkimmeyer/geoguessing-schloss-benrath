import objectCardStyles from './SbObjectCard.module.css'

interface Props {
  children?: React.ReactNode;
}


const SbObjectCard: React.FC<Props> = ({
  children
}) => {
  return (
    <div className={objectCardStyles['card']}>
      {children}
    </div>
  );
}

export default SbObjectCard;
