
import { HeadingColor, HeadingLevel, HeadingSize } from '../../types';
import { useGame } from '../../hooks/useGame';
import SbHeading from '../SbHeading/SbHeading';
import questItemsStyles from './SbQuestItems.module.css';
import SbQuestItem from '../SbQuestItem/SbQuestItem';

interface Props {
  color?: string,
}



const SbQuestItems: React.FC<Props> = ({
}) => {
  const { nextQuestItems, foundQuestItems } = useGame();

  return (
    <div className={questItemsStyles["quest-items"]}>
      <div className={questItemsStyles["quest-items--current"]}>
        <SbHeading color={HeadingColor.Dark} level={HeadingLevel.h2} size={HeadingSize.Large} title="Suche diese Gegenstände" />

        <stack-l class={questItemsStyles["quest-items--list"]}>
          {nextQuestItems.map((questItem, i) => {
            return <SbQuestItem questItem={questItem} key={i} />;
          })}
        </stack-l>
      </div>

      <div className={questItemsStyles["quest-items--next"]}>
        <SbHeading color={HeadingColor.Dark} level={HeadingLevel.h2} size={HeadingSize.Large} title="Gefundene Gegenstände" />

        <div className={questItemsStyles["quest-items--grid"]}>
          {foundQuestItems.map((questItem, i) => {
            return <SbQuestItem questItem={questItem} key={i} inGrid={true} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SbQuestItems;
