import Image, { StaticImageData } from 'next/image'
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    src: string | StaticImageData;
    alt: string;
  width: number;
  height?: undefined;
}

const SbImage: React.FC<Props> = ({
    src,
    alt,
    width,
    height,
    className
}) => {

  const computedSrc = (src: string | StaticImageData) => {
    if (typeof (src) !== 'string') {
      return src
    }

    let computedSrc = src;

    if (src.startsWith("https://res.cloudinary.com/")) {
      computedSrc = computedSrc.replace('/upload', '/upload/w_1000/q_auto/f_auto')
    }

    return computedSrc
  }

  return (
    <Image className={className} src={computedSrc(src)} alt={alt} width={width} height={height} />
  )
}

export default SbImage;
