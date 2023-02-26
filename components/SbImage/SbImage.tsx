import imageStyles from './SbImage.module.css';
import Image from 'next/image';

interface Props {
  src: string,
  alt?: string,
  width: number,
  height: number
}

const SbImage: React.FC<Props> = (props) => {
  return (
    <div>
      <Image 
        className={imageStyles['sb-image']}
        width={props.width}
        height={props.height}
        src={'https://res.cloudinary.com/dzp9ta4c7/image/upload/v1677414821/detailshots/object_01_window_03_trcz7n.jpg'} alt="Schloss Benrath von außen"></Image>
    </div>
  );
}

export default SbImage;
