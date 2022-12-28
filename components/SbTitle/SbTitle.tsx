import { t } from 'i18next';
import { IconNames } from '../../types';
import SbIcon from '../SbIcon/SbIcon';
import titleStyles from './SbTitle.module.css';

const SbTitle: React.FC = () => {
  return (
    <div>
      <span>360</span>
      <span className={titleStyles["title--degree"]}>
        <SbIcon icon={IconNames.Degree}></SbIcon>
      </span>
      <span>{ t('riddle')}</span>
    </div>
  );
}

export default SbTitle;
