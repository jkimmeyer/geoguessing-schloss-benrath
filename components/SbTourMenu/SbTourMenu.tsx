import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../types';
import SbButton from '../SbButton/SbButton';
import tourMenuStyles from './SbTourMenu.module.css'

interface Props {
  toggleMenu: () => void;
}

const SbTourMenu: React.FC<Props> = ({
  toggleMenu
}) => {

  const { currentUser } = useContext(UserContext) as UserContextType

  return (
    <div className={tourMenuStyles['tour-menu']}>
      <p>{`Hallo, ${currentUser?.playerName}!`}</p>
      <SbButton onClick={() => toggleMenu()}>Weiterspielen</SbButton>

      <SbButton href="/leaderboard">Spiel beenden</SbButton>
    </div>
  );
}

export default SbTourMenu;
