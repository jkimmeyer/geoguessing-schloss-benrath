
import Image from 'next/image';
import { BenrathObject } from '../../types';
import questItemStyles from './SbQuestItem.module.css';

interface Props {
  benrathObject: BenrathObject
  isNext?: boolean
}


const SbQuestItem: React.FC<Props> = ({
  benrathObject,
  isNext = false
}) => {
  return (
    <div className={questItemStyles["quest-item"]} data-active={isNext}>
      <Image
        src={benrathObject.thumbnail.url}
        alt={benrathObject.thumbnail.alt}
        width={benrathObject.thumbnail.width}
        height={benrathObject.thumbnail.height}
      />

      { benrathObject.title }
    </div>
  );
}

export default SbQuestItem;
