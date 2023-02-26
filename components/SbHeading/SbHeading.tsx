import { HeadingColor, HeadingLevel, HeadingSize } from '../../types';
import headingStyles from './SbHeading.module.css';

interface Props {
  title: string,
  level: HeadingLevel,
  subtitle?: string,
  size?: HeadingSize,
  color?: HeadingColor,
}


const SbHeading: React.FC<Props> = ({
  title,
  subtitle,
  level,
  color = HeadingColor.Dark,
  size = HeadingSize.Large,
}) => {
  const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;;

  return (
    <CustomTag className={headingStyles['heading']} data-size={size} data-color={color}>
      {title}
      { subtitle ? (
        <div className={headingStyles['heading--subtitle']}>{subtitle}</div>
      ) : null }
    </CustomTag>
  );
}

export default SbHeading;
