import { HeadingLevel } from '../../types';
import SbHeading from '../SbHeading/SbHeading';
import chapterStyles from './SbChapter.module.css';

interface Props {
  title: string,
  text: string,
  children?: React.ReactNode;
}

const SbChapter: React.FC<Props> = ({
  title,
  text,
  children,
}) => {
  return (
    <section className={chapterStyles['chapter']}>
      <div className={chapterStyles['chapter--title']}>
        <SbHeading level={HeadingLevel.h2} title={title} />
      </div>
      <p className={chapterStyles['chapter--text']}>{text}</p>
      <div className={chapterStyles['chapter--content']}>
        {children}
      </div>
    </section>
  );
}

export default SbChapter;
