import Image from 'next/image';
import imageSliderStyles from './SbImageSlider.module.css';
import { ImageType } from '../../types'

interface Props {
  images: ImageType[],
}

const SbImageSlider: React.FC<Props> = ({
  images
}) => {
  return (
    <ul className={imageSliderStyles['image-slider']} role="list">
      {images.map((image, index) => (
        <li key={index}>
          <Image
            src={image.url}
            alt={image.alt}
            width={320}
            height={180}
          />
        </li>
      ))}
    </ul>
  );
}

export default SbImageSlider;
