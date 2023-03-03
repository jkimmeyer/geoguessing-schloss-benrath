import Image from 'next/image';
import { ImageType } from '../../types'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface Props {
  images: ImageType[],
}

const css = `
    .main-slider {
      margin-inline: auto;
    }
`

const SbImageSlider: React.FC<Props> = ({
  images
}) => {
  return (
    <div className="main-slider">
      <style>{ css }</style>

      <Splide aria-label="Castle of Benrath" options={{
        perPage: 5, perMove: 1, width: 1600, autoplay: true, interval: 3000, rewind: true, breakpoints: {
          1600: {
            perPage: 5
          },
          1280: {
            perPage: 4
          },
          960: {
            perPage: 3
          },
          640: {
            perPage: 2,
          },
        } }}>
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <Image src={image.url} alt={image.alt} width={320}
            height={180} />
        </SplideSlide>
      ))}
       </Splide>
     </div>
  );
}

export default SbImageSlider;
