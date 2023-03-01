import overlayStyles from './SbOverlay.module.css'
import { OverlayVariant } from '../../types';

interface Props {
  withContent: boolean,
  children?: React.ReactNode;
}


const SbOverlay: React.FC<Props> = ({
  withContent,
  children
}) => {
  return (
    <div className={overlayStyles['overlay']} data-variant={withContent ? OverlayVariant.WithContent : ''}>
      { children }
    </div>
  );
}

export default SbOverlay;
