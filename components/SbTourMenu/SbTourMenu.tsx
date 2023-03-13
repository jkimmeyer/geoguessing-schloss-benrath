import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { IconNames, UserContextType } from '../../types';
import SbButton from '../SbButton/SbButton';
import SbIcon from '../SbIcon/SbIcon';
import tourMenuStyles from './SbTourMenu.module.css'

interface Props {
  toggleMenu: () => void;
}

declare global {
  interface Window {
    tour: {
      play: () => void;
      pause: () => void;
    }
  }
}

const SbTourMenu: React.FC<Props> = ({
  toggleMenu
}) => {
  const { currentUser } = useContext(UserContext) as UserContextType;
  const [tone, setTone] = useState(true);

  const toggleSound = () => {
    setTone(current => !current)
  }

  useEffect(() => {
    if (tone) {
      window.tour.resume()
    }
    else {
      window.tour.pause()
    }
  }, [tone])

  return (
    <div className={tourMenuStyles['tour-menu']}>
      <SbButton icon={
        <SbIcon icon={tone ? IconNames.Sound : IconNames.Mute} />
      }
        iconOnly={true}
        onClick={() => toggleSound()} />

      <p>{`Hallo, ${currentUser?.playerName}!`}</p>
      <SbButton onClick={() => toggleMenu()}>Weiterspielen</SbButton>

      <SbButton href="/leaderboard">Spiel beenden</SbButton>
    </div>
  );
}

export default SbTourMenu;
