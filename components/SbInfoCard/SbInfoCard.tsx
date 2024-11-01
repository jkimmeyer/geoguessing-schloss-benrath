import { BenrathObject, HeadingLevel, IconNames } from '../../types';
import SbCard from '../SbCard/SbCard';
import SbHeading from '../SbHeading/SbHeading';
import infoCardStyles from './SbInfoCard.module.css';
import SbButton from '../SbButton/SbButton';
import SbIcon from '../SbIcon/SbIcon';
import { SbThumbnailGallery } from '../SbThumbnailGallery/SbThumbnailGallery';

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
        <SbButton
          icon={
            <SbIcon icon={IconNames.Back}></SbIcon>
          }
          onClick={() => buttonHandler()}
        >
          Zurück
        </SbButton>


        <stack-l class={infoCardStyles["info-card--content"]}>

          <stack-l class={infoCardStyles["info-card--text"]}>
            <SbHeading title={benrathObject.title} subtitle={benrathObject.subtitle} level={HeadingLevel.h3} />
            <p className={infoCardStyles["info-card--description"]}>{benrathObject.description}</p>
          </stack-l>

          <SbThumbnailGallery images={benrathObject.imageUrls} />
        </stack-l>
      </SbCard>
    </div>
  );
}

export default SbInfoCard;
