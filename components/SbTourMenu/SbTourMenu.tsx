import SbButton from '../SbButton/SbButton';
import tourMenuStyles from './SbTourMenu.module.css'

const SbTourMenu: React.FC = ({
}) => {
  return (
    <div className={tourMenuStyles['tour-menu']}>
        <SbButton>Weiterspielen</SbButton>

        <SbButton>Spiel beenden</SbButton>
    </div>
  );
}

export default SbTourMenu;
