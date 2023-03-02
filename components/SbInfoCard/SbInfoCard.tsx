import { BenrathObject, HeadingLevel, IconNames } from '../../types';
import SbCard from '../SbCard/SbCard';
import SbHeading from '../SbHeading/SbHeading';
import infoCardStyles from './SbInfoCard.module.css';
import Image from 'next/image'
import SbButton from '../SbButton/SbButton';
import SbIcon from '../SbIcon/SbIcon';

interface Props {
  benrathObject: BenrathObject;
  buttonHandler: () => void
}


const SbInfoCard: React.FC<Props> = ({
  benrathObject,
  buttonHandler,
}) => {
  return (
    <div className={infoCardStyles["info-card"]}>
      <SbCard>
        <SbButton onClick={() => buttonHandler()}>
          <SbIcon icon={IconNames.Back}></SbIcon>

        </SbButton>


        <switcher-l threshold="500px" class={infoCardStyles["info-card--content"]}>
          <Image
            className={infoCardStyles["info-card--image"]}
            src={benrathObject.thumbnail.url}
            alt={benrathObject.title}
            width={benrathObject.thumbnail.width}
            height={benrathObject.thumbnail.width}
          />

            <stack-l class={infoCardStyles["info-card--text"]}>
              <SbHeading title={benrathObject.title} subtitle={benrathObject.subtitle} level={HeadingLevel.h3} />
              <p className={infoCardStyles["info-card--description"]}>{benrathObject.description}</p>
            </stack-l>
          </switcher-l>
      </SbCard>
    </div>
  );
}

export default SbInfoCard;
