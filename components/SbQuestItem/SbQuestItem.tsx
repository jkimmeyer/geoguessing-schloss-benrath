
import Image from 'next/image';
import { BenrathObject } from '../../types';
import SbImage from '../SbImage/SbImage';
import questItemStyles from './SbQuestItem.module.css';

interface Props {
  questItem: BenrathObject
  isNext?: boolean,
  inGrid?: boolean,
}


const SbQuestItem: React.FC<Props> = ({
  questItem,
  isNext = false,
  inGrid = false,
}) => {
  return (
    <div className={questItemStyles["quest-item"]} data-active={isNext} data-grid={inGrid}>
      <SbImage
        className={questItemStyles["quest-item--image"]}
        src={questItem.thumbnail.url}
        alt={questItem.thumbnail.alt}
        width={questItem.thumbnail.width}
        height={questItem.thumbnail.height}
      />

    <div className={questItemStyles["quest-item--title"]}>
      {questItem.title}
      </div>
    </div>
  );
}

export default SbQuestItem;
