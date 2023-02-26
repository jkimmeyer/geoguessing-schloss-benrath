import Image from 'next/image';

interface Props {
  src: string,
  width: number,
  height: number,
  alt: string,
}

const SbImage: React.FC<Props> = (props) => {
  return (
    <Image 
      width={props.width}
      height={props.height}
      src={props.src} 
      alt={props.alt} />
  );
}

export default SbImage;