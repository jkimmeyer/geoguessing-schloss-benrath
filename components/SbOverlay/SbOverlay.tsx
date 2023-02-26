import overlayStyles from './SbOverlay.module.css'

interface Props {
  children?: React.ReactNode;
}


const SbOverlay: React.FC<Props> = ({
  children
}) => {
  return (
    <div className={overlayStyles['overlay']}>
      { children }
    </div>
  );
}

export default SbOverlay;
