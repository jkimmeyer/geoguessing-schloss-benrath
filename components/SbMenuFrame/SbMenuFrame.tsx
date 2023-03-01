import { ReactNode, useState } from 'react';
import { IconNames } from '../../types';
import SbIcon from '../SbIcon/SbIcon';
import sbMenuFrameStyles from './SbMenuFrame.module.css'

interface Props {
  timer?: ReactNode,
  logo?: ReactNode,
  progress?: ReactNode,
  points?: ReactNode,
  closeOverlay: () => void;
}

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(current => !current);

  return (
    <div className={sbMenuFrameStyles['menu-frame--menu-container']} >
      {menuOpen &&
        <div className={sbMenuFrameStyles["menu-frame--overlay-menu"]}>
          Hello
        </div>
      }

      <button className={sbMenuFrameStyles['menu-frame--menu']} onClick={() => toggleMenu()}>
        <SbIcon icon={IconNames.Menu}></SbIcon>
      </button>
    </div>
  )
}

const SbMenuFrame: React.FC<Props> = ({
  timer,
  logo,
  progress,
  points,
  closeOverlay,
}) => {
  return (
    <div className={sbMenuFrameStyles['menu-frame']}>
      <div className={sbMenuFrameStyles['menu-frame--timer']}>
        { timer }
      </div>

      <div className={sbMenuFrameStyles['menu-frame--logo']}>
        { logo }
      </div>

      <Menu />

      <button className={sbMenuFrameStyles['menu-frame--help']} onClick={ () => closeOverlay()}>
        <SbIcon icon={IconNames.CurrentObjects}></SbIcon>
      </button>

      <button className={sbMenuFrameStyles['menu-frame--map']}>
        <SbIcon icon={IconNames.Map}></SbIcon>
      </button>

      <div className={sbMenuFrameStyles['menu-frame--progress']}>
        {progress}
      </div>

      <div className={sbMenuFrameStyles['menu-frame--points']}>
        {points}
      </div>
    </div>
  );
}

export default SbMenuFrame;
