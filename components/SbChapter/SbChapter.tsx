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
    <section className={ chapterStyles['chapter'] }>
      <h2 className={chapterStyles['chapter--title']}>{title}</h2>
      <p className={chapterStyles['chapter--text']}>{text}</p>
      <div className={chapterStyles['chapter--content']}>
        {children}
      </div>
    </section>
  );
}

export default SbChapter;
