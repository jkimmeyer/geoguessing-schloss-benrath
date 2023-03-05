import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../types';
import SbButton from '../SbButton/SbButton';
import tourMenuStyles from './SbTourMenu.module.css'

const SbTourMenu: React.FC = ({
}) => {

  const { currentUser } = useContext(UserContext) as UserContextType

  return (
    <div className={tourMenuStyles['tour-menu']}>
      <p>{`Hallo, ${currentUser?.playerName}!`}</p>
        <SbButton>Weiterspielen</SbButton>

        <SbButton>Spiel beenden</SbButton>
    </div>
  );
}

export default SbTourMenu;
