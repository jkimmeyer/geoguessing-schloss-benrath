import pageStyles from './Page.module.css';

interface Props {
  children?: React.ReactNode,
  title: string,
  subtitle: string | React.ReactNode,
  headerSlider?: React.ReactNode,
  headerButton?: React.ReactNode,
}

const Page: React.FC<Props> = ({
  children,
  title,
  subtitle,
  headerSlider,
  headerButton,
}) => {
  return (
    <div className={pageStyles['page']}>
      <header className={pageStyles['page--header']}>
        {headerButton}
        {headerSlider}
      </header>

      <main className={pageStyles['page--main']}>
        <h1 className={pageStyles['page--title']}>
          {title}
          <span className={pageStyles['page--subtitle']}>{subtitle}</span>
        </h1>

        {children}
      </main>
    </div>
  );
}

export default Page;
