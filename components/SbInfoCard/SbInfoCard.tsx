import { BenrathObject, HeadingLevel } from '../../types';
import SbCard from '../SbCard/SbCard';
import SbHeading from '../SbHeading/SbHeading';
import infoCardStyles from './SbInfoCard.module.css';
import Image from 'next/image'

interface Props {
  benrathObject: BenrathObject;
}


const SbInfoCard: React.FC<Props> = ({
  benrathObject,
}) => {
  return (
    <SbCard>
      <switcher-l>
        <Image src={benrathObject.thumbnail.url} alt={benrathObject.title} width={benrathObject.thumbnail.width} height={benrathObject.thumbnail.width} />

        <stack-l>
          <SbHeading title={benrathObject.title} subtitle={benrathObject.subtitle} level={HeadingLevel.h3} />
          <p className={infoCardStyles["info-card--description"]}>{benrathObject.description}</p>
        </stack-l>
      </switcher-l>
    </SbCard>
  );
}

export default SbInfoCard;
