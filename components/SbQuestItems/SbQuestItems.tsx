
import { BenrathObject, HeadingColor, HeadingLevel, HeadingSize } from '../../types';
import SbHeading from '../SbHeading/SbHeading';
import questItemsStyles from './SbQuestItems.module.css';

interface Props {
  color?: string,
  questItems: BenrathObject[],
}


const SbQuestItems: React.FC<Props> = ({
}) => {
  return (
    <div className={questItemsStyles["quest-items"]}>
      <div>
        <SbHeading color={HeadingColor.Dark} level={HeadingLevel.h2} size={HeadingSize.Large} title="Such diese Gegenstände!" />
        <div>

        </div>
      </div>

      <div>
        <SbHeading color={HeadingColor.Dark} level={HeadingLevel.h2} size={HeadingSize.Large} title="Gefundene Gegenstände:" />
        <div>

        </div>
      </div>
    </div>
  );
}

export default SbQuestItems;
