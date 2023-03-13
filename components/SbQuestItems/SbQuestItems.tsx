
import { BenrathObject, HeadingColor, HeadingLevel, HeadingSize } from '../../types';
import SbHeading from '../SbHeading/SbHeading';
import questItemsStyles from './SbQuestItems.module.css';
import SbQuestItem from '../SbQuestItem/SbQuestItem';

interface Props {
  hiddenItems: BenrathObject[];
  foundItems: BenrathObject[];
}

const SbQuestItems: React.FC<Props> = ({hiddenItems, foundItems}) => {

  return (
    <div className={questItemsStyles["quest-items"]}>
      <div className={questItemsStyles["quest-items--current"]}>
        <SbHeading color={HeadingColor.Dark} level={HeadingLevel.h2} size={HeadingSize.Large} title="Suche diesen Gegenstand:" />

        <stack-l class={questItemsStyles["quest-items--list"]}>
          {hiddenItems.sort((a, b) => (a.id || 0) - (b.id || 0)).slice(0, 1).map((questItem, i) => {
              return <SbQuestItem questItem={questItem} key={i} />;
          })}

          <SbHeading level={HeadingLevel.h3} color={HeadingColor.Dark} size={HeadingSize.ExtraSmall} title="Als Nächstes:" />
          <div className={questItemsStyles["quest-items--next-items"]}>
          {hiddenItems.sort((a, b) => (a.id || 0) - (b.id || 0)).slice(1, 3).map((questItem, i) => {
            return <SbQuestItem questItem={questItem} key={i} />;
          })}
          </div>
        </stack-l>
      </div>

      <div className={questItemsStyles["quest-items--next"]}>
        <SbHeading color={HeadingColor.Dark} level={HeadingLevel.h2} size={HeadingSize.Large} title="Gefundene Gegenstände:" />

        <div className={questItemsStyles["quest-items--grid"]}>
          {foundItems.sort((a, b) => (a.id || 0) - (b.id || 0)).map((questItem, i) => {
            return <SbQuestItem questItem={questItem} key={i} inGrid={true} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SbQuestItems;
