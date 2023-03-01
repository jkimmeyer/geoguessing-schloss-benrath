import tourFrameStyles from './SbTourFrame.module.css'

interface Props {
  children?: React.ReactNode;
}


const SbTourFrame: React.FC<Props> = ({
  children
}) => {
  return (
    <div className={tourFrameStyles['tour-frame']}>
      {children}
    </div>
  );
}

export default SbTourFrame;
