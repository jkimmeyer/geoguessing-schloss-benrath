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
    <div className={imageSliderStyles['image-slider']}>
      <ul className={imageSliderStyles['image-slider--list']} role="list">
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={image.url}
              alt={image.alt}
              width={150}
              height={150}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SbImageSlider;
