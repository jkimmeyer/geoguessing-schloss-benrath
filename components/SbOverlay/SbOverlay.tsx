import overlayStyles from './SbOverlay.module.css'
import { OverlayVariant } from '../../types';

interface Props {
  children?: React.ReactNode;
}


const SbOverlay: React.FC<Props> = ({
  children
}) => {
  return (
    <div className={overlayStyles['overlay']} data-variant={OverlayVariant.WithContent}>
      { children }
    </div>
  );
}

export default SbOverlay;
